import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Contex.jsx/CartContex';

const Cart = () => {
  const context = useCart();
  
  const items = context?.cartItems || context?.cart || [];
  const removeFromCart = context?.removeFromCart;

  const totalPrice = items.reduce((acc, item) => acc + (item?.price || 0), 0);

  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-xl font-black text-slate-900 mb-2">Your Shopping Cart</h1>
      <p className="text-xs text-slate-400 mb-8">Manage the items you've added to your boutique bag</p>

      {items.length === 0 ? (
        <div className="text-center py-16 bg-white border border-slate-100 rounded-2xl shadow-xs">
          <div className="text-4xl mb-4">🛒</div>
          <h2 className="text-slate-800 font-bold text-sm mb-1">Your cart is completely empty</h2>
          <p className="text-slate-400 text-xs mb-6">Looks like you haven't added any luxury pieces yet.</p>
          <Link to="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-2 rounded-xl transition-all cursor-pointer">
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-slate-100 rounded-xl p-4 flex items-center justify-between gap-4 shadow-xs"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-lg p-2 shrink-0 flex items-center justify-center mix-blend-multiply">
                  <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-slate-800 font-bold text-xs truncate leading-tight mb-1">{item.title}</h3>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">{item.category}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xs font-black text-slate-900">${item.price?.toFixed(2)}</span>
                  <button 
                    onClick={() => removeFromCart && removeFromCart(item.id)}
                    className="text-slate-300 hover:text-red-500 transition-colors text-sm p-1 cursor-pointer"
                    title="Remove item"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-xs">
            <h3 className="text-slate-900 font-black text-xs uppercase tracking-wider mb-4">Order Summary</h3>
            <div className="space-y-3 text-xs border-b border-slate-100 pb-4 mb-4">
              <div className="flex justify-between text-slate-500">
                <span>Items Selected</span>
                <span className="font-semibold text-slate-800">{items.length}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Shipping</span>
                <span className="text-emerald-600 font-bold">FREE</span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-slate-900">Total Price</span>
              <span className="text-lg font-black text-blue-600">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-slate-900 hover:bg-blue-600 text-white text-[11px] font-bold py-3 rounded-xl transition-all cursor-pointer">
              Proceed to Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;