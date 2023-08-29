import Cart from './components/Cart';
import Filters from './components/Filters';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Header>
        <Cart />
      </Header>
      <Filters />
      <ProductsList />
      <Footer />
    </CartProvider>
  );
}

export default App;
