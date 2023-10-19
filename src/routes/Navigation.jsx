import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../pages/ItemDetailContainer/ItemDetailContainer"
import Cart from "../pages/Cart/Cart"

const Navigation = () => {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <ItemListContainer />
        },
        {
            path: "/item/:id",
            element: <ItemDetailContainer />
        },
        {
            path: "/caregory/:id",
            element: <ItemListContainer />
        },
        {
            path: "/cart",
            element: <Cart />
        }
    ]) 
    return(
        <RouterProvider router={routes}/>
    )
}

export default Navigation