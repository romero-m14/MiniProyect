import React from 'react';

const Loading = () => (
  <div className="flex flex-col justify-center items-center h-48 w-full">
    <div className="animate-spin rounded-full h-8 w-8 border-2 border-slate-200 border-b-blue-600 mb-2"></div>
    <p className="text-[10px] text-slate-400 tracking-wider font-bold uppercase">Loading products...</p>
  </div>
);

export default Loading;