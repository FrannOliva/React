import './App.css'
import Navigation from './routes/Navigation'
import CartContext from './context/CartContext'
import {Toaster} from 'sonner'

function App() {
  return (
    <>
      <CartContext>
        <Navigation />
        <Toaster richColors theme='dark' toastOptions={{style: { fontFamily: "Inter" }}}/>
      </CartContext>
    </>
  )
}

export default App
