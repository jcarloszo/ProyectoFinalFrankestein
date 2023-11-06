import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../src/assets/Logo.png"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError(null);

        if (username === 'agente' && password === '12345') {
            console.log("Inicio de sesion exitoso");
        } else {
            setError('Nombre de usuario o contraseña incorrecta');
        }

        setLoading(false);
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
        </section>
    );
}

export default Login;