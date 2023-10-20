import "./Cart.css"
import Layout from "../../components/Layout/Layout"
import { CarritoContexto } from "../../context/CartContext"
import { useContext } from "react"

const Cart = () => {
  const {cart}  = useContext(CarritoContexto)
  console.log(cart)

  return(
    <Layout>
      {
        cart.length === 0
        ? <h1 className="carritoVacio">El carrito está vacio</h1>
        : 
        <div className="carrito">
          <h1>Su carrito de compras: </h1>
          {
            cart.map(products => (
              <div className="producto">
                <img src={products.img} alt="Error al cargar la imágen" />
                <div className="informacion">
                  <div className="nombreCantidad">
                    <h2 className="nombre">{products.name}</h2>
                    <p>Precio unitario: ${products.price}</p>
                    <p className="cantidad">Cantidad: {products.quantity}</p>
                  </div>
                  <div className="precioTotal">
                    <p>Precio total:</p>
                    <strong>${products.price * products.quantity}</strong>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      }
    </Layout>
  )
}

export default Cart