import { useCart } from "../../hooks/useCart"

export function CartItem ({product}) {
const { removefromCart, addToCart, decreaseQuantityFromCart } = useCart()
  return (
      <li>
        <img src={product.thumbnail} alt={product.title} />
        <div>
          <strong>{product.title}</strong> - $ {product.price}
        </div>
        <footer>  
        <button  onClick={() => decreaseQuantityFromCart(product)}>-</button>
          <small>
            {product.quantity} 
          </small>
        <button onClick={() => addToCart(product)}>+</button>
        <small>
          <button 
            style={{background: 'red'}}
            onClick={() => removefromCart(product)}
            >X</button>
        </small>
        </footer>
      </li>     
    )
}