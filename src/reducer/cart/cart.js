import { ALL_ACTIONS_TYPES } from "./actionTypes.js"
import { addToCart, removefromCart, cleanCart, substractQuantity } from './reducers.js'

export const initialStateCart = []

const ACTIONS_CART = {
  [ALL_ACTIONS_TYPES.ADD_TO_CART] : addToCart,
  [ALL_ACTIONS_TYPES.REMOVE_FROM_CART] : removefromCart,
  [ALL_ACTIONS_TYPES.SUBSTRACT_QUANTITY] : substractQuantity,
  [ALL_ACTIONS_TYPES.CLEAN_CART] : cleanCart,
}

export function cartReducer  ( state, action ) {
  const { type, payload } = action

  const updateState = ACTIONS_CART[type]
  
  return updateState ? updateState(state, payload) : state
}

