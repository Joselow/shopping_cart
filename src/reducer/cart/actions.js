import { ALL_ACTIONS_TYPES } from './actionTypes';

export const addToCart = (product) => ({
  type: ALL_ACTIONS_TYPES.ADD_TO_CART,
  payload: product
});

export const removeFromCart = (product) => ({
  type: ALL_ACTIONS_TYPES.REMOVE_FROM_CART,
  payload: product
});

export const substractQuantity = (product) => ({
  type: ALL_ACTIONS_TYPES.SUBSTRACT_QUANTITY,
  payload: product
});

export const cleanCart = () => ({
  type: ALL_ACTIONS_TYPES.CLEAN_CART
});
