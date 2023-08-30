import { useCart } from '../Hooks/useCart';

function ProductsListItem({ product }) {
  const { cart, addToCart, removeAll } = useCart();

  function checkProductIncart(product) {
    return cart.find(item => item.id === product.id);
  }

  const isProductIncart = checkProductIncart(product);

  return (
    <li>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - <span>{product.price}€</span>
      </div>

      <button
        style={{
          color: 'white',
          backgroundColor: isProductIncart ? 'red' : '#09f',
        }}
        onClick={() =>
          isProductIncart ? removeAll(product) : addToCart(product)
        }
      >
        {isProductIncart ? 'Remove from cart' : 'Add to cart'}
      </button>
    </li>
  );
}

export default ProductsListItem;
