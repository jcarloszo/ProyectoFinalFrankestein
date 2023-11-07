import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/views/Inicio';
import Login from "./components/views/Login";
import Navbar from "./components/common/Menu";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>  
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>

    </>
  );
}

export default App;

