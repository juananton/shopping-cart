import { useProducts } from '../Hooks/useProducts';
import ProductsListItem from './ProductsListItem';

function ProductsList() {
  const { filteredProducts } = useProducts();

  return (
    <main>
      <ul className='products'>
        {filteredProducts.slice(0, 10).map(product => (
          <ProductsListItem key={product.id} product={product} />
        ))}
      </ul>
    </main>
  );
}

export default ProductsList;
