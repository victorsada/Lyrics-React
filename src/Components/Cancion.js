import React, { Fragment } from "react";

const Cancion = ({ letra }) => {
  if (letra.length === 0) return null; //No es Object.keys porque esto retorna un string, no un objeto

  return (
    <Fragment>
      <h2>Letra de la Canción</h2> <p className="letra">{letra}</p>
    </Fragment>
  );
};

export default Cancion;
