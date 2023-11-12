import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import Dependencies from "../../components/dependencies";
import Employee from "../../components/employee";
import Informe from "../../models/informe.ts";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../src/index.css";

function InformeView() {
  const navigate = useNavigate();
  const location = useLocation();
  const [date, setDate] = useState(new Date());
  const [selectedDependency, setSelectedDependency] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (date) {
      console.log("Fecha seleccionada:", date);
    }
  }, [date]);

  const handleDependenciesChange = (newDependencies) => {
    setSelectedDependency(newDependencies);
  };

  const handleUserChange = (newUser) => {
    setUser(newUser);
  };

  const handleDateSelect = (selectedDate) => {
    // Lógica para manejar la selección de fecha
    setDate(selectedDate);
  };

  const handleVerDetalleClick = () => {
    const newInforme = new Informe({
      id: 0,
      date: new Date(),
      dependency: selectedDependency,
      employee: user,
    });

    console.log(location.state);
    navigate(`/detalle-informe/`, {
      state: { informe: newInforme, usuario: location.state },
    });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-start">
          <div className="col-mb-6 p-5 calendar-container rounded">
            <Calendar onChange={handleDateSelect} />
            <div className="fs-5 p-2">
              {date && <p>Fecha seleccionada: {date.toLocaleDateString()}</p>}
            </div>
          </div>
        </div>

        <Dependencies onDependenciesChange={handleDependenciesChange} />
        <Employee onUserChange={handleUserChange} />
        <div  className="container my-4 d-flex justify-content-center p-6 align-items-center flex-column">
        <button
          className="p-2 mt-3 rounded bg-primary"
          onClick={handleVerDetalleClick}
        >
          Ver Detalle del Informe
        </button>

        </div>
        
      </div>
    </>
  );
}

export default InformeView;
