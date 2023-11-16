import Layout from "../../components/Layout/Layout"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { db } from "../../db/db"
import { collection, getDocs } from "firebase/firestore"
import { CarritoContexto } from "../../context/CartContext"
import { toast } from "sonner"
import ButtonExample from "../../components/ButtonExample/ButtonExample"
const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { addToCart, listProducts, setListProducts } = useContext(CarritoContexto)
    
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
            }, 1300)
    }, [id]);

    setListProducts(product)
    console.log(listProducts)
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
                            <ButtonExample onClick={() => {addToCart(product.id), console.log(product.quantity), toast.success("Producto agregado al carrito!")}} texto="AGREGAR AL CARRITO"></ButtonExample>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    )
}

export default ItemDetailContainer

