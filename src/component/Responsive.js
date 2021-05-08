import React from "react";
import "./Responsive.css";

function Responsive() {
  return (
    <div className="Diseño-responsive">
      <div className="img-responsive"></div>

      <div className="Texto">
        <p className="titulo">Diseño responsive</p>
        <p>
          Tanto el diseño visual como las funciones estaran a la perfeccion sin
          importar el tipo de dispositivo en el que la pagina web sea visitada ,
          ya que cambiara sus dimensiones o estructura sin importar donde esta
          sea vista ya sea en movil , laptop o tablet .
        </p>
        <i class="fas fa-mobile-alt"></i>
        <i class="fas fa-tablet-alt"></i>
        <i class="fas fa-laptop"></i>
      </div>
    </div>
  );
}

export default Responsive;
