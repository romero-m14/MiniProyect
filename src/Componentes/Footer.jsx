import React from 'react';

const Footer = () => {
  return (
    <footer className="hidden md:block bg-white border-t border-slate-100 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-sm font-black text-slate-900 mb-4 tracking-tight">LUXE.</h3>
          <p className="text-slate-400 text-[11px] leading-relaxed max-w-xs">
            Your one-stop destination for premium lifestyle products, from jewelry to electronics. Quality guaranteed.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">Categories</h3>
          <ul className="space-y-2 text-[11px] text-slate-500 font-medium">
            <li><a href="/category/electronics" className="hover:text-blue-600 transition-colors">Electronics</a></li>
            <li><a href="/category/jewelry" className="hover:text-blue-600 transition-colors">Jewelry</a></li>
            <li><a href="/category/men's clothing" className="hover:text-blue-600 transition-colors">Men's Fashion</a></li>
            <li><a href="/category/women's clothing" className="hover:text-blue-600 transition-colors">Women's Fashion</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">Support</h3>
          <ul className="space-y-2 text-[11px] text-slate-500 font-medium">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Order Tracking</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">Newsletter</h3>
          <p className="text-slate-400 text-[11px] mb-3">Get the latest updates on new arrivals and sales.</p>
          <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-[11px] focus:outline-hidden focus:border-blue-500 transition-colors"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] py-2 rounded-xl transition-all cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] text-slate-400 font-medium">
        <p>© 2026 Luxe Store. Powered by FakeStore API.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;