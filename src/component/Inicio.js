import React, { useState } from "react";
import "./Inicio.css";


function Inicio() {
  // Este componente es toda la primera seccion excepto el menu.

  // hay dos contenidos en el lado izquierdo de la seccion una debajo del otro
  // para lograr ver el contenido que se encuentra debajo es necesario un onclick
  // dependiendo aque button sea dado click este ejecutara ya sea un desplazamiento
  // abajo o arriba.

  const [despliegue, setDespliegue] = useState();

  const ContenidoIzquierdoDesplegable = {
    position: "relative",
    width: "100%",
    top: despliegue === "arriba" ? "-100%" : "0vh",
    height: "99%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    background:
      "linear-gradient(120deg,rgb(62, 80, 193, 1),rgb(29, 146, 226, 0.9))",

    borderBottom: "1vh solid aqua",
    zIndex: "900",
    boxShadow: "2px 2px 4px 2px rgb(0, 0, 0, 0.3)",
    transition: "1s all ease",
  };

  const NameButton = (e) => {
    const { name } = e.target;

    setDespliegue(name);
  };

  return (
    <div className="contenedor-inicio">
      <div className="contenedorDE-contenido-izquierdo-desplegable">
        {
          /* Contenedor de button que generan la accion de desplazamiento 
    abajo o arriba de los 2 contenidos izquierdos*/
          <div className="contenedor-iconos-Internet-MetodoDeTrabajo">
            <button onClick={NameButton} name="abajo">
              <i class="fas fa-wifi"></i>
            </button>
            <button onClick={NameButton} name="arriba">
              <i class="fas fa-file-signature"></i>
            </button>
          </div>
        }

        <div style={ContenidoIzquierdoDesplegable}>
          <div className="contenido-izquierdo">
            <p className="titulo">Tu negocio necesita estar en internet </p>
            <p className="comentario">
              Un placer poder tenerte por aqui , Mi nombre es Ernesto Ulloa
              ,estoy involugrado en el desarrollo de paginas web esto claro con
              buenas tecnologias (frameworks , lenguajes de programacion , etc )
              .
            </p>
            <p className="razones">
              <i className="fas fa-hand-holding-heart"></i>haz que tu marca sea
              confiable
            </p>
            <p className="razones">
              <i className="fas fa-user-clock"></i>Estas para tus clientes 24/7
            </p>
            <p className="razones">
              <i className="fas fa-comments-dollar"></i>Consultas y solicitudes
            </p>
            <p className="razones">
              <i className="fas fa-comments-dollar"></i>Manten a tus clientes
              registrados
            </p>
          </div>
        </div>
        <div style={ContenidoIzquierdoDesplegable}>
          <div className="contenido-izquierdo">
            <p className="titulo">Metodo de trabajo</p>
            <p className="comentario">
              Para la realizacion de tu pagina web tanto al inicio como en el
              proceso trataremos ciertos parametros para que tanto la entrega de
              tu pagina web como la paga puedan ser confiables y efectivas{" "}
              <br />
              <br />
              para comenzar :
            </p>
            <p className="ListaMetodoDeTrabajo">
              1- El nombre de las secciones que quieres que contenga tu web (
              Incio , productos , eventos , etc . )
            </p>
            <p className="ListaMetodoDeTrabajo">
              2- De mi parte un informe en pdf de las caracteristicas y
              funciones de tu pagina web de tu negocio como la web que
              administrara la web de tu negocio .
            </p>
            <p className="ListaMetodoDeTrabajo">
              3- Monto de tu inversion y fecha de entrega .
            </p>
          </div>
        </div>
      </div>
      <div className="contenido-derecho">
        <div className="conte-perfil">
          <div className="img-desarrollador-web"></div>
          <p>Ernesto Ulloa</p>
          <p>Desarrollador web</p>
          <p>
            Frameworks<i class="fab fa-react"></i>
            <i class="fab fa-angular"></i>
          </p>
          <p className="github">
            <i class="fab fa-github"></i>Github
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
