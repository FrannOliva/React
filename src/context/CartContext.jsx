import { createContext, useState } from "react";

export const CarritoContexto = createContext()

const CartContext = ({children}) => {
  const [cart, setCart] = useState([])

  return(
    <CarritoContexto.Provider value={{cart, setCart}}>
      {children}
    </CarritoContexto.Provider>
  )
}

export default CartContext
