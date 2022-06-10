import React from "react";
import "../estilo/Section4.css";
function Section4({ foto1, foto2, foto3, foto4, foto5, texto }) {
  return (
    <>
      <div className="Section4">
        <div className="Section4-contenedor1">
          <img src={require(`../img/${foto1}.jpg`)}></img>
        </div>
        <div className="Section4-contenedor2">
          <img className="img1" src={require(`../img/${foto2}.jpg`)}></img>

          <img className="img2" src={require(`../img/${foto3}.jpg`)}></img>
        </div>
        <div className="Section4-contenedor3">
        <div className="textSection4">{texto}</div>
        </div>
       
        <div className="Section4-contenedor2">
        <img className="img3" src={require(`../img/${foto4}.jpg`)}/>
        <div className="contenedor-boton4">
        
            <div className="boton">Comprar ahora</div>
          </div>
         
         

          <img className="img4" src={require(`../img/${foto5}.jpg`)}></img>
          
          
        </div>
        
        
      </div>
    </>
  );
}
export default Section4;
