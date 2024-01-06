const addToCart = (state, payload) => {
  const indexProduct = state.findIndex(({ id }) => id === payload.id )
  
  if (indexProduct !== -1) {
    const newCart = state.map(product => {
      if (state[indexProduct].id === product.id) {
        return { ...product, quantity: product.quantity + 1 }
      }
      return product
    })

    return newCart
  }

  return [...state, { ...payload, quantity: 1 } ]  
}

const removefromCart = (state, payload) => {
  const indexProduct = state.findIndex(product => product.id === payload.id)

  if (indexProduct !== -1) {
    const newState = [...state]
    newState.splice(indexProduct, 1)
    return newState
  }  
}

const substractQuantity = (state, payload) => {
  const indexProduct = state.findIndex((product) => product.id === payload.id)
  const productFound = state[indexProduct]

  if (productFound.quantity == 1) return state 

  if(indexProduct !== -1) {
    const newcart = [
      ...state.slice(0, indexProduct),
      {...productFound, quantity: productFound.quantity - 1 },
      ...state.slice(indexProduct + 1)
    ]
    return newcart
  }
}

const cleanCart = (_state) => {
  return []
}

export {
  addToCart, removefromCart, cleanCart , substractQuantity
}