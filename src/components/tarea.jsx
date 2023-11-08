import { useEffect, useState } from "react";
import useTareas from "../services/TareaService";

function Tareas({ onTareasChange }) {
    const { tareas } = useTareas();
  const [selectedTareas, setSelectedTareas] = useState([]);

  const handleChange = (event) => {
    const tareaSeleccionada = tareas.find(tarea => tarea.description === event.target.value);

    if (tareaSeleccionada && !selectedTareas.some(tarea => tarea.description === tareaSeleccionada.description)) {
      setSelectedTareas([...selectedTareas, tareaSeleccionada]);
    }
  };

  const handleRemoveTarea = (index) => {
    const updatedTareas = [...selectedTareas];
    updatedTareas.splice(index, 1);
    setSelectedTareas(updatedTareas);
  };

  useEffect(() => {
    onTareasChange(selectedTareas);
  }, [selectedTareas, onTareasChange]);

  const porcentajeAvance = (selectedTareas.length / tareas.length) * 100;

  return (
    <div className="container p-3">
      <label htmlFor="dependencia" className="form-label">
        Seleccione la tarea:
      </label>
      <select className="form-select fs-5" id="tarea" onChange={handleChange}>
        <option value="" disabled selected>
          Seleccione la tarea
        </option>
        {tareas.map((tarea) => (
          <option key={tarea.id} value={tarea.description}>
            {`${tarea.description} - ${tarea.date}`}
          </option>
        ))}
      </select>

      <div className="mt-3">
        <h5>Tareas seleccionadas:</h5>
        <ul className="list-group">
          {selectedTareas.map((tarea, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {`${tarea.description} - ${tarea.date}`}
              <button className="btn btn-danger btn-sm" onClick={() => handleRemoveTarea(index)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 card text-center display-2">
        <h5>Porcentaje de Avance:</h5>
        <p>{porcentajeAvance.toFixed(2)}%</p>
      </div>
    </div>

  );
}

export default Tareas;
