import React from 'react'
import { useState, useEffect } from 'react';
import jsonData from './agentes.json'
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from 'sweetalert2';


function ControlAsistencia() {
    const [data, setData] = useState(jsonData);
    const [presentes, setPresentes] = useState([]);
    const [ausentes, setAusentes] = useState([]);

    const [dni, setDni] = useState('');
    const [dniAusente, setDniAusente] = useState('');
    const [motivo, setMotivo] = useState('');
    const [justificado, setJustificado] = useState(false);

    const addAgentePresente = () => {
        let agente = data.find(x => x.documento == dni);

        if (agente == undefined) {
            Swal.fire({
                text: "No se encontró agente por DNI",
                icon: "warning"
            });
            return;
        }

        if (presentes.find(x => x.documento == agente.documento)) {
            Swal.fire({
                text: "El agente ya se encuentra en la lista de presentes",
                icon: "warning"
            });
            return;
        }

        if (ausentes.find(x => x.documento == agente.documento)) {
            Swal.fire({
                text: "El agente ya se encuentra en la lista de ausentes",
                icon: "warning"
            });
            return;
        }

        setPresentes([...presentes, agente]);
        setDni("");
    }

    const addAgenteAusente = () => {
        let agente = data.find(x => x.documento == dniAusente);

        if (agente == undefined) {
            Swal.fire({
                text: "No se encontró agente por DNI",
                icon: "warning"
            });
            return;
        }

        if (ausentes.find(x => x.documento == agente.documento)) {
            Swal.fire({
                text: "El agente ya se encuentra en la lista de ausentes",
                icon: "warning"
            });
            return;
        }

        if (presentes.find(x => x.documento == agente.documento)) {
            Swal.fire({
                text: "El agente ya se encuentra en la lista de presentes",
                icon: "warning"
            });
            return;
        }

        let agenteAusente = { ...agente, motivo: motivo, justificado: justificado }

        setAusentes([...ausentes, agenteAusente]);
        setDniAusente('');
        setJustificado(false);
        setMotivo('');
    }

    const deletePresente = (documento) => {
        const presentesFiltrados = presentes.filter(x => x.documento != documento);
        setPresentes(presentesFiltrados);
    }

    const deleteAusente = (documento) => {
        const ausentesFiltrados = presentes.filter(x => x.documento != documento);
        setPresentes(ausentesFiltrados);
    }

    const registerControl = () => {
        if(presentes.length == 0 && ausentes.length == 0){
            Swal.fire({
                text: "No ha especificado ningun agente",
                icon: "error"
            });

            return;
        }

        Swal.fire({
            text: "Control realizado con éxito",
            icon: "success"
        });

        setAusentes([]);
        setPresentes([]);
        setDni('');
        setDniAusente('');
        setMotivo('');
        setJustificado(false);
    }

    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <div className="container-fluid mt-4">
            <h2>Control de Asistencia</h2>
            <hr />
            <div className="row">
                <div className=''>
                    <h4 className='' style={{ textAlign: "left" }}>Agentes presentes</h4>
                </div>
                <div className='overflow-scroll p-3 bg-light' style={{ height: "150px" }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: "30px" }}>#</th>
                                <th>DNI</th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {presentes.map((persona, index) => (
                                <tr key={index}>
                                    <td>
                                        <button type="button" className="btn btn-danger" onClick={(e) => deletePresente(persona.documento)}>
                                            X
                                        </button>
                                    </td>
                                    <td>{persona.documento}</td>
                                    <td>{persona.apellido + ", " + persona.nombre}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='mt-3'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="DNI" value={dni} onChange={(e) => setDni(e.target.value)} />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" onClick={addAgentePresente}>Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-primary" />
            <div className='row'>
                <div className=''>
                    <h4 className='' style={{ textAlign: "left" }}>Agentes ausentes</h4>
                </div>
                <div className='overflow-scroll p-3 bg-light' style={{ height: "150px" }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: "30px" }}>#</th>
                                <th>DNI</th>
                                <th>Nombre</th>
                                <th>Motivo</th>
                                <th>Justificado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ausentes.map((persona, index) => (
                                <tr key={index}>
                                    <td>
                                        <button type="button" className="btn btn-danger" onClick={(e) => delteAusente(persona.documento)}>
                                            X
                                        </button>
                                    </td>
                                    <td>{persona.documento}</td>
                                    <td>{persona.apellido + ", " + persona.nombre}</td>
                                    <td>{persona.motivo}</td>
                                    <td>{persona.justificado ? "Sí" : "No"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='mt-3'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="DNI" value={dniAusente} onChange={(e) => setDniAusente(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Motivo" value={motivo} onChange={(e) => setMotivo(e.target.value)} />
                    </div>
                    <div className="form-check input-group mb-3 align-items-center">
                        <input
                            type="checkbox"
                            className="form-check-input" style={{ marginRight: "10px" }}
                            checked={justificado}
                            onChange={(e) => setJustificado(!justificado)}
                        />
                        <label className="form-check-label" htmlFor="exampleCheckbox">
                            Justificado
                        </label>
                        <div className="ml-5" style={{ marginLeft: "20px" }}>
                            <button className="btn btn-primary" type="button" onClick={addAgenteAusente}>Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className="ml-5" style={{ marginLeft: "20px" }}>
                    <button className="btn btn-primary" type="button" onClick={registerControl}>Registrar control</button>
                </div>
            </div>
        </div>
    )
}

export default ControlAsistencia;
