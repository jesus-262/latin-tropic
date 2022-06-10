import React from "react";
import "../estilo/Section5.css";
function Section5({ foto1, foto2 }) {
  return (
    <>
      <div className="Section5">
        <div className="Section5-contenedor1">
          <img src={require(`../img/${foto1}.jpg`)}></img>
        </div>
        <div className="Section5-contenedor2">
          <img src={require(`../img/${foto2}.jpg`)}></img>
          <div className="contenedor-boton5">
            <div className="boton">Comprar ahora</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section5;
