import { useEffect, useState } from 'react';
import { useFilters } from './useFilters';

export function useProducts() {
  const { filterProducts } = useFilters();
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function fetchProducts() {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  const filteredProducts = filterProducts(products);

  return { filteredProducts };
}
