import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/Logo.png"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import React from "react";
import { useEffect } from "react";

function Inicio() {
    const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (event) => {
            // Prevent the mini-infobar from appearing on mobile.
            //event.preventDefault();
            console.log("👍", "beforeinstallprompt", event);
            // Stash the event so it can be triggered later.
            window.deferredPrompt = event;
            // Remove the 'hidden' class from the install button container.
            setIsReadyForInstall(true);
        });
    }, []);

    async function downloadApp() {
        console.log("👍", "butInstall-clicked");
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
          // The deferred prompt isn't available.
          console.log("oops, no prompt event guardado en window");
          return;
        }
        // Show the install prompt.
        promptEvent.prompt();
        // Log the result
        const result = await promptEvent.userChoice;
        console.log("👍", "userChoice", result);
        // Reset the deferred prompt variable, since
        // prompt() can only be called once.
        window.deferredPrompt = null;
        // Hide the install button.
        setIsReadyForInstall(false);
      }

    useEffect(() => {
        console.log(isReadyForInstall);
    }, [isReadyForInstall]);

    return (
        <>
            <section className='m-5'>
                <h1 className='text-center display-5'>Control de Permanencia en Hospitales</h1>
                <div className='text-center'>
                    <img className="p-2 imagenInicio" src={Logo} alt="Logo App" />
                </div>
                {
                    isReadyForInstall ? 
                    <>
                    <button type="button" className="btn btn-outline-primary" onClick={downloadApp}>Descargar Aplicación</button>
                    </>
                    : <></>
                }
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
                            to="informe"
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
                            to="tarea"
                            className="btn btn-outline-primary text-decoration-none btn-lg"
                        >
                            Tareas
                        </Link>
                        <Link
                            to="/GestionUsuarios"
                            className="btn btn-outline-primary text-decoration-none btn-lg"
                        >
                            Gestion de usuarios
                        </Link>
                        <Link
                            to="/ControlAsistencia"
                            className="btn btn-outline-primary text-decoration-none btn-lg"
                        >
                            Control Asistencia
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Inicio;