import { useReducer } from 'react'
import { cartReducer, initialStateCart, Actions } from '../reducer/cart'

export function useCartReducer () {
  const [ state, dispath ] = useReducer(cartReducer, initialStateCart)

  const reducers = {
    addToCart: (product) => dispath(Actions.addToCart(product)), 
    removefromCart: (product) => dispath(Actions.removeFromCart(product)), 
    substractQuantity: (product) => dispath(Actions.substractQuantity(product)), 
    cleanCart: (product) => dispath(Actions.cleanCart(product)), 
  }

  return {
    state, ...reducers
  }
}