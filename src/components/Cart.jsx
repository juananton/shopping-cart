import { useId } from 'react';
import { useCart } from '../hooks/useCart';
import CartItem from './CartItem';

function Cart() {
  const { cart, clearCart } = useCart();
  const cartCheckboxId = useId();

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        Cart
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <h1>Cart</h1>
        <ul className='products'>
          {cart.map(product => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>
        <button onClick={clearCart}>Clear cart</button>
      </aside>
    </>
  );
}

export default Cart;
