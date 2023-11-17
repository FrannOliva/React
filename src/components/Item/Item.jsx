import { Link } from "react-router-dom"
import "./item.css"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../db/db"

const Item = () => {
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("all")
    
    useEffect(() => {
        const productsRef = collection(db, "products")
        getDocs(productsRef).then((response) => {
            const productsFirebase = response.docs.map((product) => ( { id: product.id, ...product.data()} ))
            setProducts(productsFirebase)
        })
    }, [])

    const filterByCategory = (category) => {
        setSelectedCategory(category)
    }

    const filteredProducts = selectedCategory === "all" ? products : products.filter((prod) => prod.category === selectedCategory)

    return (
    <div className="items">
        <div className="filtros">
            <p onClick={() => filterByCategory("all")}>TODO</p>
            <p onClick={() => filterByCategory("pants")}>PANTALONES</p>
            <p onClick={() => filterByCategory("hoodies")}>HOODIES</p>
            <p onClick={() => filterByCategory("tshirts")}>REMERAS</p>
        </div>
        <div className="itemsGroup">
            {filteredProducts.map((prod) => (
            <div key={prod.id} className="itemsContenedor">
                <img src={prod.img} alt="Error en la carga de la imágen" />
                <h2>{prod.name}</h2>
                <p>${prod.price}</p>
                <Link to={`/item/${prod.id}`}>VER MÁS</Link>
            </div>))}
        </div>
    </div>
);
};

export default Item;