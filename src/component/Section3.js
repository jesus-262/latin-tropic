import React from "react";
import "../estilo/Section3.css";
function Section3({ foto1, foto2, foto3, texto }) {
  return (
    <>
      <div className="Section3">
        <div className="contenedor1Section3">
          <img src={require(`../img/${foto1}.jpg`)}></img>
        </div>

        <div className="contenedor2Section3">
          <div className="textSection3">{texto}</div>
          <img src={require(`../img/${foto2}.jpg`)}></img>
          <div className="contenedor-botonnn">
            <div className="boton">Comprar ahora</div>
          </div>
        </div>

        <div className="contenedor3Section3">
          <img src={require(`../img/${foto3}.jpg`)}></img>
        </div>
      </div>
    </>
  );
}
export default Section3;
