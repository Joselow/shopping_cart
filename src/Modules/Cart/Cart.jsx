import { useId } from "react"
import './Cart.css'
import { useCart } from "../../hooks/useCart"
import { CartItem } from "../CartItem/CartItem"

export function Cart () {
const { cart, removeCart } = useCart()
  const idCart = useId()
  return (
    <>
    <label className="cart-button" htmlFor={idCart}>
      <span>
        <i className="gg-shopping-cart"></i> 
      </span>
      { cart.length > 0 && <sup style={{fontWeight: 'bolder'}} >+{cart.length}</sup>  }
    </label>
    <input id={idCart} type="checkbox" hidden/>
    <aside className="cart">
      <ul>
      {  
        cart.map((product) => (
          <CartItem key={product.id} product={product}>
          </CartItem>
        ))
      }
      </ul>

      {
        cart.length > 0 
          ?
            <button
              title="Remove all products"
              onClick={() => removeCart()}
              ><i className="gg-close-o"></i>
            </button>
          : <span             
              style={{position: "relative", bottom: -50}}
              >Nothing in your cart
            </span>
      }
    </aside>
    </>
  )
}