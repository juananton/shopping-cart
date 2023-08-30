import { createContext } from 'react';
import { useCartReducer } from '../hooks/useCartReducer';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { state, addToCart, removeOne, removeAll, clearCart } =
    useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeOne,
        removeAll,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
