import React from "react";
import "./PestañasWebs.css";

function PestañasWebs() {
  return (
    <div className="contenedorDE-pestañas-webs">
      <p>
        {" "}
        <i className="fas fa-exclamation"></i>Todo tipo de contenido para tu
        pagina web : inicio , productos , sucursales , eventos , descuentos ,
        ect .
      </p>
      <div className="pestañas-webs">
        <p className="pestaña-white">
          Inicio <i className="fas fa-store"></i>
        </p>
        <p className="pestaña-white">
          Productos <i className="fas fa-socks"></i>
        </p>
        <p className="pestaña-rosa">
          Sucursales <i className="fas fa-map-marker-alt"></i>
        </p>
        <p className="pestaña-orange">
          Eventos <i className="fas fa-exclamation"></i>
        </p>
        <p className="pestaña-aqua">
          Descuentos -<i className="fas fa-percent"></i>
        </p>

        <p className="pestaña-white">
          Historias <i className="fas fa-book-reader"></i>
        </p>

        <p className="pestaña-rosa">
          Registrarse <i className="fas fa-user-friends"></i>
        </p>

        <p className="pestaña-orange">
          Redes Sociales <i className="fab fa-facebook"></i>{" "}
          <i className="fab fa-twitter"></i>
        </p>

        <p className="pestaña-aqua">
          Contactar <i className="fas fa-comment-dots"></i>
        </p>

        <p className="pestaña-rosa">
          Platillos <i className="fas fa-utensils"></i>
        </p>

        <p className="pestaña-orange">
          videos <i className="fas fa-photo-video"></i>
        </p>

        <p className="pestaña-orange">
          Calendario <i className="fas fa-calendar-check"></i>
        </p>
        <p className="pestaña-aqua">
          Servicios <i className="fas fa-concierge-bell"></i>
        </p>
      </div>
    </div>
  );
}

export default PestañasWebs;
