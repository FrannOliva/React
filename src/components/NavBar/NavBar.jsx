import "./NavBar.css"
import logotipo from "../../../src/img/logoRecortado.png"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {

    return(
        <div className="navbar">
            <Link to={`/`}><img className="logotipo" src={logotipo} alt="LOGOTIPO"/></Link>
            <div className="container">
                <ul>
                    <li><Link to={`/`}><a>INICIO</a></Link></li>
                    <li><a>PRODUCTOS</a></li>
                    <li><a>CONTACTO</a></li>
                </ul>
            </div>
            <Link to={"/cart"}>
                <CartWidget />
            </Link>
        </div>
    )
}

export default NavBar