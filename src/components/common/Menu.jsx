import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Menu = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

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
                            <NavLink end className={'nav-item nav-link'} to='/informe'>Informes</NavLink>
                            <NavLink end className={'nav-item nav-link'} to='/agentes'>Agentes</NavLink>
                            <NavLink end className={'nav-item nav-link'} to='/tareas'>Tareas</NavLink>
                            {loggedIn ? (
                                <Button className="nav-item nav-link" variant="primary" onClick={handleLogout}>
                                    Salir
                                </Button>
                            ) : (
                                <NavLink end className={'nav-item nav-link'} to='/login' onClick={handleLogin}>
                                    Acceder
                                </NavLink>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu;