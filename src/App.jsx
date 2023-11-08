import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InformeView from './views/informe/informe'
import DetalleInforme from './views/informe/detalleInforme'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/views/Inicio';
import Login from "./components/views/Login";
import Navbar from "./components/common/Menu";
import Footer from "./components/common/Footer";
import GestionUsuarios from './views/GestionUsuarios/GestionUsuarios'
import ControlAsistencia from './views/ControlAsistencia/ControlAsistencia'
import TareaView from './views/tarea/tarea';

function App() {
  return (
    <>  
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/login' element={<Login></Login>}></Route>
        <Route path="/informe" element={<InformeView />} />
        <Route path="/detalle-informe" element={<DetalleInforme />} />
        <Route path="/GestionUsuarios" element={<GestionUsuarios />} />
        <Route path="/ControlAsistencia" element={<ControlAsistencia />} />
        <Route path="/tarea" element={<TareaView />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

    </>
  );
}

export default App;

