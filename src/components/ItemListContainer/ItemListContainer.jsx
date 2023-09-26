import Layout from "../Layout/Layout"
import Item from "../Item/Item"
import "./ItemListContainer.css"

const ItemListContainer = () => {
    return(
        <Layout>
            <div className="items">
                <Item />
            </div>
        </Layout>
    )
}

export default ItemListContainer