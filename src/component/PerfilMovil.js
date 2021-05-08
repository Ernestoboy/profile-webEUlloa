import React from "react";
import "./PerfilMovil.css";

function PerfilMovil() {
      /*Este componente solo es visto desde dimenciones como movil y tablet */
  return (
    <div className="contenedor-perfil">
      <div className="img-web-developer"></div>
      <div className="texto">
        <p>Developer : </p>
        <p>Ernesto Ulloa</p>
        <p>
          Frameworks : <i class="fab fa-react"></i>
          <i class="fab fa-angular"></i>
        </p>
        <p className="github">
          <i class="fab fa-github"></i>Github
        </p>
      </div>
    </div>
  );
}

export default PerfilMovil;
