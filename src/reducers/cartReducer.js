export const cartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_ONE: 'REMOVE_ONE',
  REMOVE_ALL: 'REMOVE_ALL',
  CLEAR_CART: 'CLEAR_CART',
};

// Update localStorage with state for cart
export function updateLocalStorage(state) {
  window.localStorage.setItem('cart', JSON.stringify(state));
}

export function cartReducer(state, action) {
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload;
      const cartProductIndex = state.findIndex(item => item.id === id);

      if (cartProductIndex >= 0) {
        const newState = structuredClone(state);
        newState[cartProductIndex].quantity += 1;
        updateLocalStorage(newState);
        return newState;
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
      updateLocalStorage(newState);
      return newState;
    }
    case CART_ACTION_TYPES.REMOVE_ONE: {
      const { id, quantity } = actionPayload;
      const cartProductIndex = state.findIndex(item => item.id === id);

      if (quantity > 1) {
        const newState = structuredClone(state);
        newState[cartProductIndex].quantity -= 1;
        updateLocalStorage(newState);
        return newState;
      } else {
        const newState = state.filter(item => item.id !== id);
        updateLocalStorage(newState);
        return newState;
      }
    }
    case CART_ACTION_TYPES.REMOVE_ALL: {
      const { id } = actionPayload;
      const newState = state.filter(item => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }
    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage(cartInitialState);
      return cartInitialState;
    }
  }
  return state;
}
