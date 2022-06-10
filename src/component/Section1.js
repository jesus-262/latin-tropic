import React from "react";
import "../estilo/Section1.css";
function Section1({ foto, texto }) {
  return (
    <>
      <div className="Section1">
        <div className="contenedor-foto">
          <img src={require(`../img/${foto}.jpg`)}></img>
        </div>
        <div className="contenedor">
          <div className="contenedor-texto">
            <h1>{texto}</h1>
          </div>
          <div className="contenedor-boton">
            <div className="boton">Comprar ahora</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section1;
