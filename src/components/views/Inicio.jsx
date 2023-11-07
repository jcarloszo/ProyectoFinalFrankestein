import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/Logo.png"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Inicio() {
    return (
        <>
            <section className='m-5'>
                <h1 className='text-center display-5'>Control de Permanencia en Hospitales</h1>
                <div className='text-center'>
                    <img className="p-2 imagenInicio" src={Logo} alt="Logo App" />
                </div>
                <div>
                    <div className="d-grid gap-2">
                        <Link
                            to="login"
                            className="btn btn-outline-primary text-decoration-none btn-lg"
                        >
                            Pacientes
                        </Link>
                        <Link
                            to="login"
                            className="btn btn-outline-primary text-decoration-none btn-lg"
                        >
                            Formularios
                        </Link>
                        <Link
                            to="login"
                            className="btn btn-outline-primary text-decoration-none btn-lg"
                        >
                            Informes
                        </Link>
                        <Link
                            to="login"
                            className="btn btn-outline-primary text-decoration-none btn-lg"
                        >
                            Agentes
                        </Link>
                        <Link
                            to="login"
                            className="btn btn-outline-primary text-decoration-none btn-lg"
                        >
                            Tareas
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Inicio;