import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"

const Layout = ({children}) => {

    return(
        <>
            <NavBar />
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout