import { useState } from 'react';
import { products as initialProducts } from './mocks/products.json';

import Filters from './components/Filters';
import ProductsList from './components/ProductsList';
import ProductsManager from './components/ProductsManager';

function App() {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  function setCategory(newCategory) {
    setFilters({
      ...filters,
      category: newCategory,
    });
  }

  function setMinPrice(newMinPrice) {
    setFilters({
      ...filters,
      minPrice: newMinPrice,
    });
  }

  function filterProducts(products) {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  }

  const filteredProducts = filterProducts(initialProducts);

  return (
    <ProductsManager>
      <Filters
        category={filters.category}
        setCategory={setCategory}
        minPrice={filters.minPrice}
        setMinPrice={setMinPrice}
      />
      <ProductsList products={filteredProducts} />
    </ProductsManager>
  );
}

export default App;
