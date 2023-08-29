import { useContext } from 'react';
import { FiltersContext } from '../contexts/FiltersContext';

export function useFilters() {
  const { category, minPrice, setCategory, setMinPrice } =
    useContext(FiltersContext);

  function filterProducts(products) {
    return products.filter(product => {
      return (
        product.price >= minPrice &&
        (category === 'all' || product.category === category)
      );
    });
  }

  return {
    category,
    minPrice,
    setCategory,
    setMinPrice,
    filterProducts,
  };
}
