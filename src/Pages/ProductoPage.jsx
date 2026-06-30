import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetchProducts from '../Hooks/useFetchProducts'; 
import { useCart } from '../Contex.jsx/CartContex';
import Loading from '../Componentes/Loading'; 
import WishlistPage from '../Componentes/WishlistPage'; 

const ProductoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  if (id === 'favoritos') {
    return <WishlistPage />;
  }
  
  const { data: product, loading, error } = useFetchProducts(`/${id}`);

  if (loading) return <Loading />;
  if (error) return <div className="p-8 text-center text-red-500">Error loading product.</div>;
  if (!product) return <div className="p-8 text-center text-slate-500">Product not found.</div>;

  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 text-slate-500 hover:text-slate-900 text-xs font-semibold flex items-center gap-1 cursor-pointer"
      >
        ← Back to store
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white border border-slate-100 rounded-2xl p-8 shadow-xs">
        <div className="w-full aspect-square bg-slate-50 rounded-xl p-8 flex items-center justify-center">
          <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain mix-blend-multiply" />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-[10px] uppercase font-black tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded w-fit mb-3">
            {product.category}
          </span>
          <h1 className="text-xl font-extrabold text-slate-900 leading-tight mb-2">{product.title}</h1>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-black text-slate-900">${product.price?.toFixed(2)}</span>
            <span className="text-xs text-amber-500 bg-amber-50 px-2 py-0.5 rounded font-bold">
              ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
            </span>
          </div>

          <p className="text-slate-500 text-xs leading-relaxed mb-8 font-light">{product.description}</p>
          
          <button 
            onClick={() => addToCart(product)}
            className="w-full md:w-fit bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-8 py-3 rounded-xl transition-all cursor-pointer shadow-xs"
          >
            Add to Shopping Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductoPage;