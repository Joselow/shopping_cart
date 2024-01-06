import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { CartProvider } from './context/cartContext'

import './App.css'
import { Product } from './Modules/Product/Product'
import { Header } from './Modules/Header/Header'
import { Cart } from './Modules/Cart/Cart'

function App() {
  const { filterProducts} = useFilters()
  const [products] = useState(initialProducts.slice(0, 10))

  const filteredProducts = filterProducts({ products })
  return (
    <CartProvider>  
      <Header/>
      <Cart></Cart>
      <Product
      products={filteredProducts}
      />
    </CartProvider>
  )
}

export default App
