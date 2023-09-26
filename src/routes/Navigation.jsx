import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../pages/ItemDetailContainer/ItemDetailContainer"

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
        }
    ]) 
    return(
        <RouterProvider router={routes}/>
    )
}

export default Navigation