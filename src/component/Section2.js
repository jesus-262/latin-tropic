import React from "react";
import "../estilo/Section2.css";
function Section2({ foto1, foto2, foto3, foto4 }) {
  return (
    <>
      <div className="Section2">
        <div className="contenedor1">
          <div className="sombra1">
            <img src={require(`../img/${foto1}.jpg`)}></img>
          </div>
        </div>

        <div className="contenedor2">
          <div className="sombra2">
            <img src={require(`../img/${foto2}.jpg`)}></img>
            <div className="contenedor-botonn">
              <div className="boton">Comprar ahora</div>
            </div>
          </div>
          <div className="rosado1"></div>
        </div>
      </div>
      <div className="Sectionparte2">
        <div className="contenedorparte1">
          <div className="rosado2"></div>
        </div>

        <div className="contenedorparte2">
          <img src={require(`../img/${foto3}.jpg`)}></img>
        </div>
        <div className="contenedorparte3">
          <img src={require(`../img/${foto4}.jpg`)}></img>
        </div>
      </div>
    </>
  );
}
export default Section2;
