import { useState, useEffect } from "react";

function Employee({ onUserChange }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    dni: "",
    nivel: "",
    funcion: "",
  });

  useEffect(() => {
    onUserChange(formulario)
  }, [formulario,onUserChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card p-2">
            <div className="card-body">
              <h2 className="text-center mb-2">Datos Usuario</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 row align-items-center">
                  <label className="col-sm-3 col-form-label text-small">
                    Nombre
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="nombre"
                      name="nombre"
                      placeholder="Ingrese su nombre"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row align-items-center">
                  <label
                    htmlFor="dni"
                    className="col-sm-3 col-form-label text-small"
                  >
                    DNI
                  </label>
                  <div className="col-sm-9">
                  <input
                      type="number"
                      className="form-control form-control-sm"
                      id="dni"
                      name="dni"
                      placeholder="Ingrese su DNI"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row align-items-center">
                  <label
                    htmlFor="nivel"
                    className="col-sm-3 col-form-label text-small"
                  >
                    Nivel
                  </label>
                  <div className="col-sm-9">
                  <input
                      type="text"
                      className="form-control form-control-sm"
                      id="nivel"
                      name="nivel"
                      placeholder="Ingrese el Nivel"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3 row align-items-center">
                  <label
                    htmlFor="funcion"
                    className="col-sm-3 col-form-label text-small"
                  >
                    Funcion
                  </label>
                  <div className="col-sm-9">
                  <input
                      type="text"
                      className="form-control form-control-sm"
                      id="funcion"
                      name="funcion"
                      placeholder="Ingrese la funcion"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
