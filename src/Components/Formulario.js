import React, { useState } from "react";
import { act } from "react-dom/test-utils";

const Formulario = ({ guardarBusquedaLetra }) => {
  const [busqueda, guardarBusqueda] = useState({
    arista: "",
    cancion: ""
  });

  const actualizarState = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };
  const { artista, cancion } = busqueda;
  const [error, guardarError] = useState(false);

  const buscarInformacion = e => {
    e.preventDefault();
    //validar que los campos no esten vacios

    if (artista === "" || cancion === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarBusquedaLetra(busqueda);
  };

  return (
    <div className="bg-info">
      {error ? (
        <p className="alert alert-danger text-center p-2">
          Todos los campos son obligatorios
        </p>
      ) : null}
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={buscarInformacion}
          >
            <fieldset>
              <legend className="text-center">Buscador Letra Canciones </legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista:</label>
                    <input
                      type="text"
                      name="artista"
                      placeholder="Nombre del artista"
                      className="form-control"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción:</label>
                    <input
                      type="text"
                      name="cancion"
                      placeholder="Nombre de la canción"
                      className="form-control"
                      onChange={actualizarState}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
