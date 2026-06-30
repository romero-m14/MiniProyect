import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetchProducts from '../Hooks/useFetchProducts';
import ProductCard from '../Componentes/ProductCard';

const Home = ({ searchTerm = '' }) => {
  const { category } = useParams();
  const endpoint = category ? `/category/${category}` : '';
  const { data: products, loading, error } = useFetchProducts(endpoint);
  
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredProducts = (products || []).filter((product) =>
    product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const productsToDisplay = filteredProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50 pb-16">
        <p className="text-xs font-semibold text-slate-500 animate-pulse">Loading amazing pieces...</p>
      </div>
    );
  }

  if (error) {
    return <div className="p-8 text-center text-red-500 text-xs">Error: {error}</div>;
  }

  return (
    <div className="bg-[#fafafa] min-h-screen pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        
        {!category && (
          <div 
            className="relative rounded-2xl text-white p-6 md:p-12 mb-8 flex flex-col justify-end md:justify-center min-h-105 md:min-h-80 overflow-hidden bg-cover bg-center shadow-xs"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200')` 
            }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent md:bg-linear-to-r md:from-[#0f172a] md:via-[#0f172a]/85 md:to-transparent"></div>
            <div className="max-w-md z-10 text-center md:text-left mx-auto md:mx-0">
              <span className="text-[9px] uppercase font-bold tracking-widest text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded-md inline-block">
                New Collection 2026
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-3 leading-tight">
                Redefine Your <br />
                <span className="text-blue-500">Everyday Style</span>
              </h1>
              <p className="text-slate-300 text-[11px] mt-2 leading-relaxed font-light px-4 md:px-0">
                Explore our curated selection of premium electronics and high-fashion apparel tailored for the modern lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-5 px-6 md:px-0">
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer shadow-sm">
                  Shop Collection
                </button>
                <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-[11px] font-bold transition-all border border-white/10 cursor-pointer">
                  View Lookbook
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-sm md:text-base font-black text-slate-900 tracking-tight capitalize">
              {category ? category.replace(" clothing", "") : "New Arrivals"}
            </h2>
          </div>
          <button className="text-blue-600 text-[10px] font-bold hover:underline cursor-pointer">
            See All →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {productsToDisplay.length > 0 ? (
            productsToDisplay.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-slate-400 text-xs col-span-full py-8 text-center">No articles available matching your filter.</p>
          )}
        </div>

        {!category && (
  <div className="mt-12 bg-slate-50 rounded-2xl p-4 md:p-6 border border-slate-100 md:hidden">
    <h3 className="text-xs font-black text-slate-800 tracking-wide mb-4 uppercase text-center md:text-left">
      Shop by Category
    </h3>
    <div className="flex items-center gap-6 overflow-x-auto no-scrollbar pb-1">
      {[
        { name: 'Women', url: "/category/women's clothing", icon: '👗' },
        { name: 'Men', url: "/category/men's clothing", icon: '👔' },
        { name: 'Jewelery', url: '/category/jewelery', icon: '✨' },
        { name: 'Electronics', url: '/category/electronics', icon: '💻' },
      ].map((cat) => (
        <Link 
          to={cat.url} 
          key={cat.name} 
          className="flex flex-col items-center gap-2 min-w-16 group cursor-pointer mx-auto md:mx-0"
        >
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-xs group-hover:scale-105 transition-transform text-lg">
            {cat.icon}
          </div>
          <span className="text-[10px] font-bold text-slate-600 tracking-tight group-hover:text-blue-600 transition-colors">
            {cat.name}
          </span>
        </Link>
      ))}
    </div>
  </div>
)}
        {visibleCount < filteredProducts.length && (
          <div className="mt-12 flex flex-col items-center justify-center gap-2">
            <button
              onClick={handleLoadMore}
              className="bg-white hover:bg-slate-50 text-slate-800 text-[11px] font-bold px-7 py-2.5 rounded-xl border border-slate-200 shadow-xs transition-all cursor-pointer tracking-wide"
            >
              Load More Products
            </button>
            <p className="text-[10px] text-slate-400 font-medium">
              Showing {productsToDisplay.length} of {filteredProducts.length} products
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;