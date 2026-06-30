import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Contex.jsx/CartContex';
import useCorazon from '../Hooks/useCorazon';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isFavorite } = useCorazon();
  const favorite = isFavorite(product.id);

  return (
    <div className="product-card-premium relative">
      
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product);
        }}
        className="absolute top-3 right-3 z-10 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center text-xs cursor-pointer active:scale-90 transition-transform select-none border border-slate-100"
      >
        {favorite ? '❤️' : '🤍'}
      </button>

      <div>
        <div className="w-full h-44 bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center p-4">
          <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain mix-blend-multiply" />
        </div>
        <div className="mt-4">
          <span className="text-[10px] uppercase font-bold text-blue-600 tracking-wider">
            {product.category}
          </span>
          <Link to={`/products/${product.id}`}>
            <h3 className="text-xs font-semibold text-slate-800 mt-1 line-clamp-2 hover:text-blue-600 transition-colors h-8 Redirect">
              {product.title}
            </h3>
          </Link>
          <div className="flex items-center gap-1 mt-2 text-[11px] text-amber-500">
            <span>★</span>
            <span className="text-slate-400 font-medium">{product.rating?.rate || '4.5'}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-1.5">
        <div className="text-sm font-black text-slate-900">${product.price.toFixed(2)}</div>
        
        <Link 
          to={`/products/${product.id}`} 
          className="w-full text-center block bg-slate-100 hover:bg-slate-200 text-slate-800 py-1.5 rounded-lg text-[11px] font-bold transition-colors"
        >
          👀 Ver detalles
        </Link>

        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-[#0f172a] hover:bg-blue-600 text-white text-[11px] font-bold py-2 rounded-lg transition-all cursor-pointer shadow-xs"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;