import { products as initialProducts } from './mocks/products.json';

import { useFilters } from './Hooks/useFilters';
import Filters from './components/Filters';
import Footer from './components/Footer';
import ProductsList from './components/ProductsList';
import ProductsManager from './components/ProductsManager';

function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <ProductsManager>
      <Filters />
      <ProductsList products={filteredProducts} />
      <Footer />
    </ProductsManager>
  );
}

export default App;
