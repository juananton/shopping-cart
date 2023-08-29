import { useProducts } from './Hooks/useProducts';
import Filters from './components/Filters';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductsList from './components/ProductsList';

function App() {
  const { filteredProducts } = useProducts();

  return (
    <>
      <Header />
      <Filters />
      <ProductsList products={filteredProducts} />
      <Footer />
    </>
  );
}

export default App;
