import './Product.css'
import { useCart } from '../../hooks/useCart'

function EmptyProducts () {
  return <span> There are no products with these characteristics</span>
}

function ProductList ({ products }) {
  const { addToCart, cart, removefromCart , checkProductInCart} = useCart()
  return (
    <main className='products'>            
          <ul>
            { 
            products.map((product, index) => (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title} - $ {product.price}</strong>
                </div>
                <div>
                  <button
                    onClick={()=>addToCart(product)}
                  >
                    <i className="gg-shopping-cart"></i> 
                  </button>
                  { checkProductInCart(product.id) && 
                    <small>
                      <button 
                        style={{background: 'red'}}
                        onClick={() => removefromCart(product)}
                        >X</button>
                    </small>
                  }
                </div>

              </li>
            )) 
            }        
          </ul>
      </main>
  )
}

export function Product ({products}) {
  const productExists  = products.length
  return (    
    productExists 
      ? <ProductList products={products}></ProductList> 
      : <EmptyProducts></EmptyProducts>
  )
}