import React from 'react';

const SeachBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full">
      <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400 text-xs">
        🔍
      </span>
      
      <input
        type="text"
        placeholder="Search premium pieces..."
        value={searchTerm || ''} 
        onChange={(e) => setSearchTerm(e.value)}
        className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200/80 focus:border-blue-500 rounded-xl pl-9 pr-4 py-2 text-[11px] text-slate-800 focus:outline-hidden transition-all placeholder-slate-400 font-medium shadow-xs"
      />

      {searchTerm && (
        <button
          onClick={() => setSearchTerm('')}
          className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600 text-[10px] font-bold cursor-pointer"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SeachBar;