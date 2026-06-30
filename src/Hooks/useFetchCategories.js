import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCategoryProducts = (categoryName) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!categoryName) return;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url = `https://fakestoreapi.com/products/category/${categoryName}`;
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (err) {
        setError(err.message || 'Error al cargar productos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return { products, loading, error };
};

export default useFetchCategoryProducts;