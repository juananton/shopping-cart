import { useReducer } from 'react';
import {
  CART_ACTION_TYPES,
  cartInitialState,
  cartReducer,
} from '../reducers/cartReducer';

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  function addToCart(product) {
    dispatch({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: product,
    });
  }

  function removeOne(product) {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_ONE,
      payload: product,
    });
  }

  function removeAll(product) {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_ALL,
      payload: product,
    });
  }

  function clearCart() {
    dispatch({
      type: CART_ACTION_TYPES.CLEAR_CART,
    });
  }

  return { state, addToCart, removeOne, removeAll, clearCart };
}
