import "./NavBar.css"
import logotipo from "../img/logoRecortado.png"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <div className="navbar">
            <img className="logotipo" src={logotipo} alt="LOGOTIPO"/>
            <div className="container">
                <ul>
                    <li><a>INICIO</a></li>
                    <li><a>PRODUCTOS</a></li>
                    <li><a>NOSOTROS</a></li>
                </ul>
            </div>
            <CartWidget />
        </div>
    )
} 

export default NavBar