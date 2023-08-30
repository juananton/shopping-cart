export const cartInitialState = [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_ONE: 'REMOVE_ONE',
  REMOVE_ALL: 'REMOVE_ALL',
  CLEAR_CART: 'CLEAR_CART',
};

export function cartReducer(state, action) {
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload;
      const cartProductIndex = state.findIndex(item => item.id === id);

      if (cartProductIndex >= 0) {
        const newState = structuredClone(state);
        newState[cartProductIndex].quantity += 1;
        return newState;
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
    }
    case CART_ACTION_TYPES.REMOVE_ONE: {
      const { id, quantity } = actionPayload;
      const cartProductIndex = state.findIndex(item => item.id === id);

      if (quantity > 1) {
        const newstate = structuredClone(state);
        newstate[cartProductIndex].quantity -= 1;
        return newstate;
      } else {
        return state.filter(item => item.id !== id);
      }
    }
    case CART_ACTION_TYPES.REMOVE_ALL: {
      const { id } = actionPayload;
      return state.filter(item => item.id !== id);
    }
    case CART_ACTION_TYPES.CLEAR_CART: {
      return cartInitialState;
    }
  }
  return state;
}
