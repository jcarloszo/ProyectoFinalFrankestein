import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function DetalleInforme() {
  const navigate = useNavigate();
  const location = useLocation();
  const { informe } = location.state;

  const usuario = "AGENTE";

  const [tablaData, setTablaData] = useState([
    { dni: "", nombre: "", nivel: "", funcion: "" },
    { dni: "", nombre: "", nivel: "", funcion: "" },
    { dni: "", nombre: "", nivel: "", funcion: "" },
  ]);

  const handleInputChange = (e, rowIndex, columnName) => {
    const updatedData = [...tablaData];
    updatedData[rowIndex][columnName] = e.target.value;
    setTablaData(updatedData);
  };

  const handleRegister = () => {
    //Crear la clase DetalleInformeClass para registrar la informacion.
    navigate(`/`);
  };

  const { date, dependency, employee } = informe;

  const formattedDate = new Date(date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="container-fluid">
        <div className="mb-4 text-center mt-5">
          <h2 className="">Acta Control de Permanencia</h2>
        </div>
        <div className="mb-4 p-5">
          En la Ciudad de San Miguel de Tucuman {formattedDate}
          siendo horas {new Date().toTimeString()}
          se apersonan los Sres.
          {usuario} en su caracter de Inspectores de Personal según Resolución
          Nº 476/SPS de fecha 05/09/16 a fin de efectuar un control de
          permanencia de los agentes que prestan servicios en
          {dependency.name}. En este acto, se encuentra presente el{" "}
          {employee.funcion} de la repartición. Sr. {employee.nombre} quien pone
          a la vista y disposición las planillas de asistencia de personal
          correspondiente al dia de la fecha. Asimismo se encuentre presente{" "}
          {employee.nombre} - {employee.dni} - {employee.funcion}. A
          continuación se detallan los agentes que no se encontraban prestando
          servicios en su puesto de trabajo al momento de la presente
          verificación.
        </div>
        <div className="container my-4">
          <table className="table table-bordered text-center">
            <thead className="table-primary">
              <tr>
                <th scope="col">DNI</th>
                <th scope="col">NOMBRE</th>
                <th scope="col">NIVEL</th>
                <th scope="col">FUNCION</th>
              </tr>
            </thead>
            <tbody>
              {tablaData.map((fila, index) => (
                <tr key={index}>
                  <td>
                    <input
                      className="form-control"
                      value={fila.dni}
                      onChange={(e) => handleInputChange(e, index, "dni")}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      value={fila.nombre}
                      onChange={(e) => handleInputChange(e, index, "nombre")}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      value={fila.nivel}
                      onChange={(e) => handleInputChange(e, index, "nivel")}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      value={fila.funcion}
                      onChange={(e) => handleInputChange(e, index, "funcion")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          Preguntados los Sres {employee.nombre} respecto a la ausencia de los
          agentes manifestaron:
          <div>
            <textarea className="rounded container-fluid table"></textarea>
          </div>
          <div>
            Siendo las {new Date().toTimeString()} horas, se da por terminado el
            presente control de permanencia, firmando por los presentes 3
            ejemplares de un mismo tenor y a un solo efecto.
          </div>
          <div>
            <table className="table mb-4 text-center">
              <thead>
                <tr>
                  <th scope="col">Firma de Inspector</th>
                  <th scope="col">Firma de Encargado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{usuario}</td>
                  <td>{}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="container my-4 d-flex justify-content-center align-items-center flex-column">
            <button
              className="p-2 mt-3 rounded btn btn-primary"
              onClick={handleRegister}
            >
              Registrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetalleInforme;
