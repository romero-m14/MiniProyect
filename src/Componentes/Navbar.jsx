import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../Contex.jsx/CartContex';

const Navbar = ({ children }) => {
  const { cartItems } = useCart();
  const location = useLocation();
  const items = cartItems || [];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-100 px-4 md:px-8 py-3.5 flex items-center justify-between w-full h-16">
        
        <div className="flex items-center gap-8">
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-slate-700 text-xl cursor-pointer p-1">☰</button>
          
          <Link to="/" className="text-base font-black tracking-tight text-slate-900">
            <span className="text-blue-600 font-extrabold">LUXE</span>
          </Link>

          <div className="hidden md:flex items-center gap-5 text-sm font-semibold text-slate-600">
            <Link to="/category/electronics" className="hover:text-blue-600">Electronics</Link>
            <Link to="/category/jewelry" className="hover:text-blue-600">Jewelry</Link>
            <Link to="/category/men's clothing" className="hover:text-blue-600">Men's</Link>
            <Link to="/category/women's clothing" className="hover:text-blue-600">Women's</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-xl hover:text-blue-600 cursor-pointer">🔍</button>
          <Link to="/product/favoritos" className="hidden md:block text-slate-600 hover:text-red-500 text-lg transition-colors">🤍</Link>
          <Link to="/cart" className="relative p-1">
            <span className="text-lg">🛒</span>
            {items && items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {isSearchOpen && (
        <div className="px-4 py-3 bg-slate-50 border-b border-slate-100">
          <div className="max-w-2xl mx-auto">{children}</div>
        </div>
      )}

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs" onClick={() => setIsMenuOpen(false)}>
          <div className="w-64 h-full bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <span className="font-black text-slate-900">Categories</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 font-bold">✕</button>
            </div>
            <ul className="space-y-4 text-xs font-semibold text-slate-600">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>All Products</Link></li>
              <li><Link to="/category/electronics" onClick={() => setIsMenuOpen(false)}>Electronics</Link></li>
              <li><Link to="/category/jewelry" onClick={() => setIsMenuOpen(false)}>Jewelry</Link></li>
              <li><Link to="/category/men's clothing" onClick={() => setIsMenuOpen(false)}>Men's Clothing</Link></li>
              <li><Link to="/category/women's clothing" onClick={() => setIsMenuOpen(false)}>Women's Clothing</Link></li>
            </ul>
          </div>
        </div>
      )}

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-100 py-2.5 px-6 flex items-center justify-between shadow-lg">
        <Link to="/" className="flex flex-col items-center text-slate-400"><span>🏠</span><span className="text-[9px]">HOME</span></Link>
        <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="flex flex-col items-center text-slate-400"><span>🔍</span><span className="text-[9px]">SEARCH</span></button>
        <Link to="/product/favoritos" className="flex flex-col items-center text-slate-400"><span>❤️</span><span className="text-[9px]">WISHLIST</span></Link>
        <Link to="/cart" className="flex flex-col items-center text-slate-400"><span>🛒</span><span className="text-[9px]">CART</span></Link>
      </div>
    </>
  );
};

export default Navbar;