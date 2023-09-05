import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings= "Bienvenidos a BANIRA"/>
    </>
  )
}

export default App
