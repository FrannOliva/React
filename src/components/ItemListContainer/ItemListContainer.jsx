import Layout from "../Layout/Layout"
import Item from "../Item/Item"
import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../db/db"

const ItemListContainer = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // const productsRef = collection(db, "products")
        // getDocs(productsRef).then((response) => {
        //     const productsFirebase = response.docs.map((product) => ( { id: product.id, ...product.data()} ))
        //     console.log(productsFirebase)
        // })


        setTimeout(() => {
            setIsLoading(false)
        }, 1200)
    }, [])

    return(
        <Layout>
            {isLoading ? (
                <div className="loaderDiv">
                    <span className="loader"></span>
                </div>
            ):(
                <div className="items">
                    <Item />
                </div>
            )}
        </Layout>
    )
}

export default ItemListContainer