import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const navegacion = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError(null);

        if (username === 'agente' && password === '12345') {
            console.log("Inicio de sesion exitoso");
            setLoggedIn(true);
            navegacion('/')
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Usuario o password incorrectos',
                confirmButtonText: 'Entendido'
            });
            setError('Usuario o password incorrectos');
        }

        setLoading(false);
    };

    const handleLogout = () => {
        setLoggedIn(false);
        navegacion('/login');
    };

    return (
        <section className='row d-flex justify-content-center m-0 py-5'>
            <h1 className='text-center display-5'>Control de Permanencia en Hospitales</h1>
            <div className='text-center'>
                <img className="p-2 imagenLogin" src={Logo} alt="Logo App" />
            </div>
            <h2 className='text-center'>Iniciar sesión</h2>
            <Form className='text-center container mx-5 d-flex flex-column col-lg-3 col-md-4 p-3' onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                {error && <Alert variant="danger">{error}</Alert>}

                <Button className="mt-3" variant="primary" type="submit" disabled={loading}>
                    {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                </Button>
            </Form>
            {loggedIn && (
                <Button className="mt-3" variant="primary" onClick={handleLogout}>
                    Salir
                </Button>
            )}
        </section>
    );
};

export default Login;