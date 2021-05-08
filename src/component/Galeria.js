import React from "react";
import "./Galeria.css";

function Galeria(props) {
  return (
    <div className="Contenedor-imagenes" ref={props.galeria}>
      <div class="img1"></div>
      <div class="img2"></div>
      <div class="img3"></div>
      <div class="img4"></div>
      <div class="img5"></div>
      <div class="img6"></div>
      <div class="img7"></div>
      <div class="img8"></div>
      <div class="img9"></div>
    </div>
  );
}

export default Galeria;
