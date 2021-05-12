import "./App.css";
import { useRef, useState } from "react";

import "./component/fontawesome-free-5.15.1-web/css/all.min.css";
import Inicio from "./component/Inicio";
import PestañasWebs from "./component/PestañasWebs";
import Responsive from "./component/Responsive";
import ContenidoDinamico from "./component/ContenidoDinamico";
import PerfilMovil from "./component/PerfilMovil";
import Galeria from "./component/Galeria";
import Contactar from "./component/Contactar";
import Footer from "./component/Footer";




function App() {
  const enlacegaleria = useRef(null);
  const enlacecontactar = useRef(null);
  const [menu, setMenu] = useState();

  const onScroll = (ref) => () => {
    if (!ref)
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    else ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const stylemenu = {
    position: "fixed",
    top: "0%",
    width: "100%",
    height: "7.5vh",
    background:
      menu === true
        ? " linear-gradient(120deg,rgb(40, 40, 40, 90),rgb(55,55, 55, 9)) "
        : "white",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    boxShadow: "1px 1px 7px 1px rgb(0, 0, 0, 0.2)",
    zIndex: "1000000000000000000000000000000000",
    color: menu === true ? "white" : "rgb(29, 146, 226, 9)",
  };

  const changeBackground = () => {
    if (window.scrollY >= 500) {
      setMenu(true);
    } else setMenu(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className="App">
      <nav style={stylemenu}>
        <p className="tituloMenu">Web developer</p>
        <div className="tabs">
          <div className="tab" onClick={onScroll()}>
            Inicio
          </div>
          <div className="tab" onClick={onScroll(enlacegaleria)}>
            Diseños
          </div>
          <div className="tab" onClick={onScroll(enlacecontactar)}>
            Contactar
          </div>
        </div>
      </nav>

      <Inicio />
      <PestañasWebs />
      <Responsive />
      <ContenidoDinamico />
      <PerfilMovil />
      <Galeria galeria={enlacegaleria} />
      <Contactar contactar={enlacecontactar} />
      <Footer />
    </div>
  );
}

export default App;