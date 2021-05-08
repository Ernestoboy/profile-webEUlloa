import React from "react";
import "./ContenidoDinamico.css";

function ContenidoDinamico() {
   /*Este componente solo es visto desde dimenciones como laptop */
  return (
    <div className="contenedorDE-contenidosDinamicos">
      <div className="contenidoDinamicoIzquierdo">
        <div className="contenidoIzquierdoCentrado">
          <div className="imgDeFondoHamburgueza"></div>
          <div className="img-hamburgueza1"></div>
          <div className="img-hamburgueza2"></div>
          <div className="img-hamburgueza3"></div>
          <div className="img-hamburgueza4"></div>
          <div className="imgDeFondoFormulario">
            <p>
              <i class="fas fa-th-list"></i>Formularios
            </p>
            <p>
              <i class="fas fa-photo-video"></i>Contenido administrable
            </p>
            <p>
              <i class="far fa-address-book"></i>Registro de usuarios
            </p>
          </div>
        </div>
      </div>

      <div className="contenidoDinamicoDerecho">
        <p className="titulo">Contenido dinamico</p>
        <p>
          Administrable si cuentas con negocio de ventas tendras en muchas
          ocaciones nuevos productos , ofertas , historias algo nuevo que
          compartirles a tus clientes por ende necesitaras una web administrable
          para hacerle cambios al contenido de la misma .
        </p>
        <i class="fas fa-th-list"></i>
        <i class="fas fa-photo-video"></i>
        <i class="far fa-address-book"></i>
      </div>
    </div>
  );
}

export default ContenidoDinamico;
