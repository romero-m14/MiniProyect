import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="text-center py-24 px-6">
    <h1 className="text-6xl font-black text-slate-200">404</h1>
    <h2 className="text-sm font-bold text-slate-700 mt-2">Page Not Found</h2>
    <Link to="/" className="inline-block mt-4 bg-slate-900 text-white px-5 py-2 rounded-lg font-bold text-xs">Go Home</Link>
  </div>
);

export default NotFound;