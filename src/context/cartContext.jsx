import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const { state, addToCart, cleanCart, removefromCart, substractQuantity } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state, 
      addToCart, 
      removeCart: cleanCart, 
      removefromCart, 
      decreaseQuantityFromCart: substractQuantity
    }}>
      {children}
    </CartContext.Provider>
  )
}