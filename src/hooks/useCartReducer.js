import { useReducer } from 'react'
import { cartReducer, initialStateCart, Actions } from '../reducer/cart'

export function useCartReducer () {
  const [ state, dispath ] = useReducer(cartReducer, initialStateCart)

  const reducers = {
    addToCart: (product) => dispath(Actions.addToCart(product)), 
    removefromCart: (product) => dispath(Actions.removeFromCart(product)), 
    substractQuantity: (product) => dispath(Actions.substractQuantity(product)), 
    cleanCart: () => dispath(Actions.cleanCart()), 
    // cleanCart: dispath(Actions.cleanCart()),  // -- aqui estamos ejecutando la funcion dispatch cosa que no queremos.
  }

  return {
    state, ...reducers
  }
}