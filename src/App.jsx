import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
    </>
  )
}

export default App
