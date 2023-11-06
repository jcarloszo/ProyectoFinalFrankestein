import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../src/assets/Logo.png"
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>  
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">SIPROSA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Acceder</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

    <div className="bg-body-tertiary text-dark pt-3">
      <Container>
        <div className="pt-2 text-center">
          <p>&copy; Todos los derechos reservados</p>
        </div>
      </Container>
    </div>
    </>
  );
}

export default App;