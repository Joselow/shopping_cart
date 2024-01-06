import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export function useCart () {
  const cardContext = useContext(CartContext)

  if (cardContext === undefined) {
    throw new Error('use this context inside the CardProvider');
  }
  
  const { cart, addToCart, removeCart, removefromCart, decreaseQuantityFromCart } = cardContext

  const checkProductInCart = (id) => {  // con memo 100%
    return cart.some(product => product.id === id)
  }

  return { cart, 
    addToCart, removeCart, removefromCart, checkProductInCart, decreaseQuantityFromCart }
}