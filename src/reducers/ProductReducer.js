import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  UPDATE_SEARCH_QUERY,
} from "../constants/constants";

export const ProductReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id === payload.cartItem.id
            ? (item.quantity = payload.quantity)
            : item.quantity
        ),
      };
    case UPDATE_SEARCH_QUERY:
      return { ...state, searchQuery: payload };
    default:
      return { ...state };
  }
};
