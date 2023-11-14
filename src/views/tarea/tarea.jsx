import { useEffect, useState } from "react";
import Tareas from "../../components/tarea";
import { Avance } from "../../models/avance.ts";
import { useNavigate } from "react-router-dom";
import "../../../src/index.css";

function TareaView() {
  const navigate = useNavigate();
  const [selectedTarea, setSelectedTarea] = useState();

  useEffect(() => {}, []);

  const handleTareasChange = (newTarea) => {
    setSelectedTarea(newTarea);
  };

  const handleRegister = () => {
    const newAvance = new Avance({
      id: 0,
      date: new Date(),
      tareas: selectedTarea,
      usuario: "agente",
    });

    console.log(newAvance);

    navigate(`/`);
  };

  return (
    <>
    <div class="justify-content-center text-center my-3 border-bottom border-3 row">
                <div class="col"><h2>Tareas</h2></div>
            </div>
      <div className="container my-5 d-flex justify-content-center p-2 align-items-center flex-column">
        <div className="row justify-content-center align-items-start"></div>

        <Tareas onTareasChange={handleTareasChange} />

        <div className="container my-4 d-flex justify-content-center  mx-2 p-2 align-items-center flex-column">
          <div className="d-flex justify-content-between w-50">
            <button className="p-2 mt-3 rounded btn btn-danger">Cerrar</button>
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

export default TareaView;
