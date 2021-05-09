import React, { useState } from "react";
import "./Contactar.css";

import { db } from "../firebase";

const Contactar = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="Contactar" ref={props.contactar}>
      <div className="contenedor-img"></div>

      <form className="form" onSubmit={handleSubmit}>
        <p className="titulo-contactarme">Contactarme</p>

        <label>Nombre de tu negocio</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Cuentame un poco acerca de tu negocio</label>
        <textarea
          placeholder="¿Cual es tu negocio?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          type="submit"
          style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contactar;
