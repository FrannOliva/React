import Layout from "../../components/Layout/Layout"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { db } from "../../db/db"
import { collection, getDocs } from "firebase/firestore"
const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const productsRef = collection(db, "products")
        getDocs(productsRef)
            .then((response) => {
                const productsFirebase = response.docs.map((product) => ({ id: product.id, ...product.data() }))
    
                const searchProduct = productsFirebase.find((product) => product.id === id)
    
                if (searchProduct) {
                    setProduct(searchProduct)
                } else {
                    console.log("Producto no encontrado")
                }
            })
            .catch((error) => {
                console.log(error)
            })
            setTimeout(() => {
                setIsLoading(false)
            }, 1600)
    }, [id]);


    return (
        <Layout>
            {isLoading ? (
                <div className="loaderDiv">
                    <span className="loader"></span>
                </div>
            ):(
                <div className="itemDetailContainer">
                    <div className="itemDetail">
                        <img src={product.img} alt="Error al cargar la imágen" />
                        <div className="itemInfo">
                            <h1>{product.name}</h1>
                            <p className="price">${product.price} <span>¡Podés pagarlo en cuotas sin interes!</span></p>
                            <p>{product.description}</p>
                            <div className="talles">
                                <button class="button-24" role="button">XS</button>
                                <button class="button-24" role="button">S</button>
                                <button class="button-24" role="button">M</button>
                                <button class="button-24" role="button">L</button>
                                <button class="button-24" role="button">XL</button>
                            </div>
                            <button className="button-27" role="button">Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    )
}

export default ItemDetailContainer

