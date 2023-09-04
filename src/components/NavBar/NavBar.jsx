import "./NavBar.css"
import logotipo from "../img/logoRecortado.png"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <div className="navbar">
            <img className="logotipo" src={logotipo} alt="LOGOTIPO"/>
            <ItemListContainer />
            <CartWidget />
        </div>
    )
} 

export default NavBar