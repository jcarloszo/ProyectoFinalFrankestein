import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import Dependencies from "../../components/dependencies";
import Employee from "../../components/employee";
import Informe from "../../models/informe";
import { Dependency } from "../../models/dependency";
import { EmployeeClass } from "../../models/employee";
import { useNavigate } from 'react-router-dom';

import '../../../src/index.css'

function InformeView() {
    const navigate = useNavigate();
  //const [informe,setInforme] = useState(new Informe())
  const [date, setDate] = useState(new Date());

  const [selectedDependency, setSelectedDependency] = useState();
  const [user, setUser] = useState(null);

  const [informe, setInforme] = useState();

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

    navigate(`/detalle-informe/`, { state: { informe: newInforme } });

  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-start">
          <div className="col-mb-6 p-3 celest-background day calendar-container rounded">
            <Calendar onChange={handleDateSelect} />
            <div className="fs-5 p-2">
            {date && <p>Fecha seleccionada: {date.toLocaleDateString()}</p>}
            </div>
          </div>
        </div>

        <Dependencies onDependenciesChange={handleDependenciesChange} />
        <Employee onUserChange={handleUserChange} />
        <button className="p-2 mt-3 rounded bg-primary"onClick={handleVerDetalleClick}>Ver Detalle del Informe</button>
      </div>
    </>
  );
}

export default InformeView;
