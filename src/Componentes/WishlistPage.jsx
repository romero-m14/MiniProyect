import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../Componentes/ProductCard.jsx';
import useCorazon from '../Hooks/useCorazon.js'; 
import useFetchProducts from '../Hooks/useFetchProducts.js'; 

const WishlistPage = () => {
  const { data: products, loading, error } = useFetchProducts('');
  const { isFavorite } = useCorazon();

  const favoritos = (products || []).filter(product => isFavorite(product.id));

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-48 w-full min-h-screen bg-slate-50">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-200 border-b-blue-600 mb-2"></div>
        <p className="text-[10px] text-slate-400 tracking-wider font-bold uppercase">Cargando tus favoritos...</p>
      </div>
    );
  }

  if (error) {
    return <div className="p-8 text-center text-red-500 text-xs">Error: {error}</div>;
  }

  return (
    <div className="bg-[#fafafa] min-h-screen pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="flex items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
          <h2 className="text-sm md:text-base font-black text-slate-900 tracking-tight flex items-center gap-2">
            Mis Guardados ❤️ <span className="text-xs font-normal text-slate-400">({favoritos.length})</span>
          </h2>
          <Link to="/" className="bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors">
            🛍️ Volver a la Tienda
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {favoritos.length > 0 ? (
            favoritos.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <span className="text-3xl block mb-2">❤️‍🩹</span>
              <p className="text-slate-400 text-xs font-medium max-w-sm mx-auto">
                No tienes ningún producto guardado como favorito todavía. ¡Ve a explorar y dale amor a tus artículos!
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default WishlistPage;