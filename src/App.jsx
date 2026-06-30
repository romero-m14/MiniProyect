import './index.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Contex.jsx/CartContex'; // Asegúrate de que la ruta a tu contexto sea correcta
import Navbar from './Componentes/Navbar';
import SeachBar from './Componentes/SeachBar';
import Home from './Pages/Home';
import ProductoPage from './Pages/ProductoPage';
import Cart from './Componentes/Cart';
import NotFound from './Pages/NotFound';
import Footer from './Componentes/Footer';

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
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;