import { useContext } from "react"
import "./CartWidget.css"
import { CarritoContexto } from "../../context/CartContext.jsx"

const CartWidget = () => {
    const { cart } = useContext(CarritoContexto)
    console.log(cart)

    return(
        <div className="cartWidget">
            <i className="fa-solid fa-cart-shopping"></i>
            <p>{cart.length}</p>
        </div>
    )
}

export default CartWidget