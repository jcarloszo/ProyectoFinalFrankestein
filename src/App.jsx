import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/views/Inicio';
import Login from "./components/views/Login";

function App() {
  return (
    <>  
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/login' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;

