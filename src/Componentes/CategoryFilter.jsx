import React from 'react';
import { NavLink } from 'react-router-dom';

const CategoryFilter = () => {
  const categories = [
    { id: 'electronics', name: 'Electronics' },
    { id: 'jewelery', name: 'Jewelry' },
    { id: "men's clothing", name: "Men's Clothing" },
    { id: "women's clothing", name: "Women's Clothing" }
  ];
  
  return (
    <div className="flex gap-6 border-b border-slate-100 pb-4 mb-6 text-xs font-semibold text-slate-500">
      <NavLink to="/" className={({ isActive }) => isActive ? "text-slate-900 font-bold border-b-2 border-slate-900 pb-4 -mb-4" : "hover:text-slate-900"}>
        All Products
      </NavLink>
      {categories.map((cat) => (
        <NavLink 
          key={cat.id}
          to={`/category/${cat.id}`}
          className={({ isActive }) => isActive ? "text-slate-900 font-bold border-b-2 border-slate-900 pb-4 -mb-4" : "hover:text-slate-900"}
        >
          {cat.name}
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryFilter;