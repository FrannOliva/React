import Layout from "../../components/Layout/Layout"
import "./ItemDetailContainer.css"
import { products } from "../../products"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    const searchProduct = products.find(
        (product) => product.id === parseInt(id)
    )
    
    useEffect(() => {
        setTimeout(() => {
            setProduct(searchProduct)
            setIsLoading(false)
        }, 1200)
    }, [])

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