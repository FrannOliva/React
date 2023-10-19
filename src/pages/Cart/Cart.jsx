import "./Cart.css"
import Layout from "../../components/Layout/Layout"
import { CarritoContexto } from "../../context/CartContext"
import { useContext } from "react"

const Cart = () => {
  const { cart } = useContext(CarritoContexto)

  return(
    <Layout>
      {
        !CarritoContexto.length
        ? <h1>El carrito está vacio</h1>
        : <div>
          {
            cart.map(products => (
            <h2>{products.name}</h2>
            ))
          }
        </div>
      }
    </Layout>
  )
}

export default Cart