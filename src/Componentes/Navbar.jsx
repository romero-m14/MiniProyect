import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../Contex.jsx/CartContex';

const Navbar = ({ children }) => {
  const { cartItems } = useCart();
  const location = useLocation();
  const items = cartItems || [];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white border-b border-slate-100 px-4 md:px-8 py-3.5 flex items-center justify-between">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="block md:hidden text-slate-700 text-xl cursor-pointer p-1 active:scale-95 transition-transform"
        >
          ☰
        </button>

        <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Link to="/" className="text-base font-black tracking-tight text-slate-900">
            <span className="text-blue-600 font-extrabold">LUXE</span>
          </Link>
        </div>

        <div className="hidden md:block w-96">
          {children}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/product/favoritos" className="hidden md:block text-slate-600 hover:text-red-500 text-lg transition-colors">
            🤍
          </Link>
          <Link to="/cart" className="relative p-1">
            <span className="text-lg">🛒</span>
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Link>
        </div>
      </nav>

      <div className="block md:hidden px-4 py-2 bg-white border-b border-slate-50">
        {children}
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs" onClick={() => setIsMenuOpen(false)}>
          <div className="w-64 h-full bg-white p-6 shadow-2xl animate-fade-in-left" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <span className="font-black text-slate-900">Categories</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 hover:text-slate-600 text-sm font-bold">✕</button>
            </div>
            <ul className="space-y-4 text-xs font-semibold text-slate-600">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 block py-1">All Products</Link></li>
              <li><Link to="/category/electronics" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 block py-1">Electronics</Link></li>
              <li><Link to="/category/jewelry" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 block py-1">Jewelry</Link></li>
              <li><Link to="/category/men's clothing" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 block py-1">Men's Clothing</Link></li>
              <li><Link to="/category/women's clothing" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 block py-1">Women's Clothing</Link></li>
            </ul>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-100 py-2.5 px-6 flex items-center justify-between md:hidden shadow-lg">
        <Link to="/" className={`flex flex-col items-center gap-0.5 cursor-pointer ${location.pathname === '/' ? 'text-blue-600 font-bold' : 'text-slate-400'}`}>
          <span className="text-lg">🏠</span>
          <span className="text-[9px] tracking-wider uppercase font-medium">Home</span>
        </Link>
        <div className="flex flex-col items-center gap-0.5 text-slate-400 cursor-pointer" onClick={() => setIsMenuOpen(true)}>
          <span className="text-lg">🧭</span>
          <span className="text-[9px] tracking-wider uppercase font-medium">Explore</span>
        </div>
        <Link to="/product/favoritos" className={`flex flex-col items-center gap-0.5 cursor-pointer ${location.pathname === '/product/favoritos' ? 'text-red-500 font-bold' : 'text-slate-400'}`}>
          <span className="text-lg">❤️</span>
          <span className="text-[9px] tracking-wider uppercase font-medium">Wishlist</span>
        </Link>
        <Link to="/cart" className={`flex flex-col items-center gap-0.5 cursor-pointer ${location.pathname === '/cart' ? 'text-blue-600 font-bold' : 'text-slate-400'}`}>
          <div className="relative">
            <span className="text-lg">🛒</span>
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[8px] font-bold h-3.5 w-3.5 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </div>
          <span className="text-[9px] tracking-wider uppercase font-medium">Cart</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;