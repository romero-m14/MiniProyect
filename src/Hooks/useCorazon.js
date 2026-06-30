import { useState, useEffect } from 'react';

const useCorazon = () => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const localData = localStorage.getItem('luxe_wishlist');
    return localData ? JSON.parse(localData) : [];
  });

  const mostrarSoloFavoritos = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('ver') === 'favoritos';

  useEffect(() => {
    const handleStorageUpdate = () => {
      const localData = localStorage.getItem('luxe_wishlist');
      setWishlistItems(localData ? JSON.parse(localData) : []);
    };

    window.addEventListener('wishlist-update', handleStorageUpdate);
    return () => window.removeEventListener('wishlist-update', handleStorageUpdate);
  }, []);

  const toggleWishlist = (product) => {
    const localData = localStorage.getItem('luxe_wishlist');
    let currentItems = localData ? JSON.parse(localData) : [];
    
    const exists = currentItems.some((item) => item.id === product.id);
    if (exists) {
      currentItems = currentItems.filter((item) => item.id !== product.id);
    } else {
      currentItems = [...currentItems, product];
    }

    localStorage.setItem('luxe_wishlist', JSON.stringify(currentItems));
    setWishlistItems(currentItems);

    window.dispatchEvent(new Event('wishlist-update'));
  };

  const isFavorite = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  const filtrarProductos = (listaDeProductos) => {
    if (!mostrarSoloFavoritos) return listaDeProductos; 
    return (listaDeProductos || []).filter(product => isFavorite(product.id));
  };

  return { 
    wishlistItems, 
    favCount: wishlistItems.length, 
    toggleWishlist, 
    isFavorite,
    mostrarSoloFavoritos,
    filtrarProductos 
  };
};

export default useCorazon;