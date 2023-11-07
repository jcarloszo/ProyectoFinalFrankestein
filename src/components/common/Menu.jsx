import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink} from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>SIPROSA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="ml-auto">
                            <NavLink end className={'nav-item nav-link'} to='/'>Inicio</NavLink>
                            <NavLink end className={'nav-item nav-link'} to='/formularios'>Formularios</NavLink>
                            <NavLink end className={'nav-item nav-link'} to='/informes'>Informes</NavLink>
                            <NavLink end className={'nav-item nav-link'} to='/agentes'>Agentes</NavLink>
                            <NavLink end className={'nav-item nav-link'} to='/tareas'>Tareas</NavLink>
                            <NavLink end className={'nav-item nav-link'} to='/login'>Acceder</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;