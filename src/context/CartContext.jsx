import { createContext, useState } from "react";

export const CarritoContexto = createContext()

const CartContext = ({children}) => {
  const [cart, setCart] = useState([])
  const [listProducts, setListProducts] = useState([])

  const addToCart = (id) =>{
    const isRepeted = cart.some(producto => producto.id == id)
    if(!isRepeted){
      cart.push(listProducts)
      listProducts.quantity++
    } else{
      listProducts.quantity++
    }
  }

  return(
    <CarritoContexto.Provider value={{cart, setCart, listProducts, setListProducts, addToCart}}>
      {children}
    </CarritoContexto.Provider>
  )
}

export default CartContext
