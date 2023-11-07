import { useEffect, useState } from "react";
import useDependencies from "../services/DependencyService";
import { Dependency } from "../models/dependency";

function Dependencies({ onDependenciesChange }) {
  const { dependencies } = useDependencies();

  const [dependency, setDependency] = useState();

  useEffect(() => {
    onDependenciesChange(dependency)
  }, [dependency,onDependenciesChange]);

  const handleChange = (event) => {
    dependencies.forEach(element=>{
      if(element.id == event.target.value){
       setDependency(element)
      }
    })    
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="dependencia" className="form-label">
        </label>
        <select
          className="form-select fs-5"
          id="dependencia"
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Seleccione una dependencia
          </option>
          {dependencies.map((dependency) => (
            <option key={dependency.id} value={dependency.id}>
              {`${dependency.name} - ${dependency.section} - ${dependency.direction}`}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Dependencies;
