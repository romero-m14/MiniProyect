import './index.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Contex.jsx/CartContex'; 
import Navbar from './Componentes/Navbar';
import SeachBar from './Componentes/SeachBar';
import Home from './Pages/Home';
import ProductoPage from './Pages/ProductoPage';
import Cart from './Componentes/Cart';
import NotFound from './Pages/NotFound';
import Footer from './Componentes/Footer';
import WishlistPage from './Componentes/WishlistPage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <CartProvider> 
      <Router>
        
        <Navbar>
          <SeachBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Navbar>

        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/category/:category" element={<Home searchTerm={searchTerm} />} />
          <Route path="/product/:id" element={<ProductoPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products/favoritos" element={<WishlistPage />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;