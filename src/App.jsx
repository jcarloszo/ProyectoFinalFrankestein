import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import GestionUsuarios from './pages/GestionUsuarios/Principal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GestionUsuarios/>
    </>
  )
}

export default App
