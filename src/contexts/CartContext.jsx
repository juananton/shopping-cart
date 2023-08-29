import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function checkProductIcart(product) {
    return cart.find(item => item.id === product.id);
  }

  function addToCart(product) {
    const cartProductIndex = cart.findIndex(item => item.id === product.id);

    if (cartProductIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[cartProductIndex].quantity += 1;
      return setCart(newCart);
    }

    setCart(prevState => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }

  function removeFromCart(product) {
    setCart(prevState => prevState.filter(item => item.id !== product.id));
  }

  function removeOneFromCart(product) {
    const cartProductIndex = cart.findIndex(item => item.id === product.id);

    if (product.quantity > 1) {
      const newCart = structuredClone(cart);
      newCart[cartProductIndex].quantity -= 1;
      return setCart(newCart);
    } else removeFromCart(product);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        checkProductIcart,
        addToCart,
        removeFromCart,
        removeOneFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
