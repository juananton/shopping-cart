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

  const CATEGORIES = products.reduce((acc, curr) => {
    !acc.includes(curr.category) && acc.push(curr.category);
    return acc;
  }, []);

  const filteredProducts = filterProducts(products);

  return { CATEGORIES, filteredProducts };
}
