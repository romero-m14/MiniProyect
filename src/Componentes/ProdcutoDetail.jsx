import React from 'react';
import { useCart } from '../Contex.jsx/CartContex';

const ProdcutoDetail = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 border border-slate-100 rounded-xl shadow-xs">
      <div className="h-80 flex items-center justify-center bg-slate-50 rounded-xl p-6">
        <img src={product.image} alt={product.title} className="max-h-full object-contain mix-blend-multiply" />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{product.category}</span>
          <h1 className="text-2xl font-bold text-slate-900 mt-2">{product.title}</h1>
          <p className="text-slate-500 text-xs mt-4 leading-relaxed">{product.description}</p>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="text-3xl font-black text-slate-900 mb-4">${product.price.toFixed(2)}</div>
          <button onClick={() => addToCart(product)} className="w-full bg-[#0f172a] text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors text-xs">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdcutoDetail;