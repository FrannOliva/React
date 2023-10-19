import './App.css'
import Navigation from './routes/Navigation'
import CartContext from './context/CartContext'

function App() {
  return (
    <>
      <CartContext>
        <Navigation />
      </CartContext>
    </>
  )
}

export default App
