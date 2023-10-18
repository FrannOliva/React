import { Link } from "react-router-dom"
import "./item.css"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../db/db"

const Item = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const productsRef = collection(db, "products")
        getDocs(productsRef).then((response) => {
            const productsFirebase = response.docs.map((product) => ( { id: product.id, ...product.data()} ))
            setProducts(productsFirebase)
        })
    }, [])

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
