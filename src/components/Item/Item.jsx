import { Link } from "react-router-dom"
import { products } from "../../products"
import "./item.css"

const Item = () => {
    return (
        products.map(prod => (
            <div className="itemsContenedor">
                <img src={prod.img} alt="Error en la carga de la imágen"/>
                <h2>{prod.name}</h2>
                <p>${prod.price}</p>
                <Link to={`/item/${prod.id}`}>VER MÁS</Link>
            </div>
        ))
    )
}

export default Item
