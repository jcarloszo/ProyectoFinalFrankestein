import { useState } from "react";
import Informe from "../../models/informe";
import { useLocation } from "react-router-dom";

function DetalleInforme() {
  const location = useLocation();
  const { informe } = location.state;

  const { id, date, dependency, employee } = informe;

  const formattedDate = new Date(date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div>
        <p>Acta Control de Permanencia</p>
        <div>
            En la Ciudad de San Miguel de Tucuman {formattedDate} siendo horas {new Date().toTimeString()} 
            {' '}se apersonan los Sres. {employee.nombre} en su caracter de Inspectores de Personal 
            según Resolución Nº 476/SPS de fecha 05/09/16 a fin de efectuar un control
            de permanencia de los agentes que prestan servicios en {dependency.name}. En este acto
        </div>
        <table className="table">
      <thead>
        <tr>
          <th scope="col">DNI</th>
          <th scope="col">NOMBRE</th>
          <th scope="col">NIVEL</th>
          <th scope="col">FUNCION</th>
        </tr>
      </thead>
      <tbody>
          <tr key={employee.dni}>
            <td>{employee.dni}</td>
            <td>{employee.nivel}</td>
            <td>{employee.nombre}</td>
            <td>{employee.funcion}</td>
          </tr>
      </tbody>
    </table>

        <div>
            Preguntados los Sres.
        </div>



      </div>
    </>
  );
}

export default DetalleInforme;
