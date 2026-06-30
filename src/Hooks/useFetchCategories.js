import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (err) {
        setError(err.message || 'Error al cargar categorías');
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  return { categories, loading, error };
};

export default useFetchCategories;