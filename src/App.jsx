import './App.css'
import InformeView from './views/informe/informe'
import DetalleInforme from './views/informe/detalleInforme'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<InformeView />} />
    <Route path="/detalle-informe" element={<DetalleInforme />} />
  </Routes>
</BrowserRouter>
  )
}

export default App
