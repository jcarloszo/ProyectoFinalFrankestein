import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/Logo.png"
import Button from 'react-bootstrap/Button';

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
                        <Button variant="outline-primary" size="lg">
                            Formularios
                        </Button>
                        <Button variant="outline-primary" size="lg">
                            Informes
                        </Button>
                        <Button variant="outline-primary" size="lg">
                            Agentes
                        </Button>
                        <Button variant="outline-primary" size="lg">
                            Tareas
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Inicio;