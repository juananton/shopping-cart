import { useState } from 'react';
import { products as initialProducts } from './mocks/products.json';

import ProductsList from './ProductsList';

function App() {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  function filterProducts(products) {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  }

  const filteredProducts = filterProducts(initialProducts);

  return <ProductsList products={filteredProducts} />;
}

export default App;
