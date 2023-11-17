import "./Cart.css"
import Layout from "../../components/Layout/Layout"
import { CarritoContexto } from "../../context/CartContext"
import { useContext, useState } from "react"
import { toast } from "sonner"
import { addDoc } from "firebase/firestore"
import { ordersCollection } from "../../db/db"
import { Link } from "react-router-dom"
import ButtonExample from "../../components/ButtonExample/ButtonExample"

const Cart = () => {
  const {cart, setCart}  = useContext(CarritoContexto)
  console.log(cart)

  const totalOrder = (cart) => {
    console.log(cart)
    const totalCantidad = cart.reduce((acc, item) => acc + item.quantity, 0)
    const totalCompra = cart.reduce((acc, item) => acc + (item.quantity * item.price), 0)

    return{totalCantidad, totalCompra}
  }

  const {totalCantidad, totalCompra} = totalOrder(cart)
  console.log(totalCantidad, totalCompra)

  const [buyerData, setBuyerData] = useState({
    name: "",
    email: "",
  })

  const handleBuyerDataChange = (e) => {
    const { name, value } = e.target
    setBuyerData({ ...buyerData, [name]: value })
  }

  const order = {
    buyer: buyerData,
    items: {...cart},
    products: totalCantidad,
    price: totalCompra
  }
  const createOrderInFireBase = async () => {
    if (!buyerData.name || !buyerData.email) {
      toast.error("Por favor, complete todos los campos del formulario.")
      return
    }

    try {
      toast.promise(
        async () => {
          const docRef = await addDoc(ordersCollection, order)
          setCart([])
          return docRef.id
        },
        {
          loading: "Procesando su orden.",
          success: "Orden creada correctamente. Te llegará un email con toda la información!",
          error: "Ocurrió un error con su orden.",
        }
      )
    } catch (error) {
      console.error(error)
      toast.error("Ocurrió un error con su orden.")
    }
  }

  const eliminarCantidad = (index) => {
    const updatedCart = [...cart]
    updatedCart[index].quantity--
  
    if (updatedCart[index].quantity === 0) {
      updatedCart.splice(index, 1)
    }
  
    setCart(updatedCart)
  }

  return(
    <Layout>
      {
        cart.length === 0
        ? <h1 className="carritoVacio">El carrito está vacio</h1>
        : 
        <div className="carrito">
          <h1>Su carrito de compras: </h1>
          {
            cart.map((products, i) => (
              <div className="producto">
                <img src={products.img} alt="Error al cargar la imágen" />
                <div className="informacion">
                  <div className="nombreCantidad">
                    <h2 className="nombre">{products.name}</h2>
                    <p>Precio unitario: ${products.price}</p>
                    <p className="cantidad">Cantidad: {products.quantity}</p>
                    <p onClick={() => eliminarCantidad(i)} className="botonEliminar">ELIMINAR UNA UNIDAD</p>
                  </div>
                  <div className="precioTotal">
                    <p>Precio total:</p>
                    <strong>${products.price * products.quantity}</strong>
                  </div>
                </div>
              </div>
            ))
          }
          <div className="inputs">
            <form>
              <div className="inputGroup">
                <label htmlFor="name">NOMBRE COMPLETO:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={buyerData.name}
                  onChange={handleBuyerDataChange}
                  required
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="email">EMAIL:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={buyerData.email}
                  onChange={handleBuyerDataChange}
                  required
                />
              </div>
            </form>
          </div>
          <div className="totales">
            <h3>Total de su compra: <strong>${totalCompra}</strong></h3>
          </div>
          <div className="botones">
            <Link to={`/`}><ButtonExample texto="SEGUIR COMPRANDO"/></Link>
            <ButtonExample onClick={() => createOrderInFireBase()} texto="FINALIZAR COMPRA" />
          </div>
        </div>
      }
    </Layout>
  )
}

export default Cart