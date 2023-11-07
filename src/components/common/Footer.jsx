import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    return (
            <div className="bg-primary text-light pt-3">
                <Container>
                    <div className="pt-2 text-center">
                        <p>&copy; Todos los derechos reservados</p>
                    </div>
                </Container>
            </div>
    );
};

export default Footer;