import { useCart } from '../hooks/useCart';

function CartItem({ product }) {
  const { addToCart, removeOne, removeAll } = useCart();
  return (
    <li key={product.id}>
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <strong>{product.title}</strong> - <span>{product.price}€</span>
      </div>
      <footer>
        <p>{product.quantity}</p>
        <div className='add-buttons'>
          <button onClick={() => removeOne(product)}>-</button>
          <button onClick={() => addToCart(product)}>+</button>
        </div>
        <button onClick={() => removeAll(product)}>Remove from cart</button>
      </footer>
    </li>
  );
}

export default CartItem;
