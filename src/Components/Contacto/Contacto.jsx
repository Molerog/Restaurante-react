import "./Contacto.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contacto = () => {
  let users = JSON.parse(localStorage.getItem("USUARIOS")) || [];

  const saveData = () => {
    users.push(data);
    localStorage.setItem("USUARIOS", JSON.stringify(users));
  };

  const [data, setData] = useState({
    username: "",
    email: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const initialState = {
    username: "",
    email: "",
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (event) => {
    if (data.username.length < 3) {
      setMessage("El nombre debe contener como mínimo 3 letras");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    console.log(event.target.name);
    console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("se lanza el formulario", data);
    saveData();
    clearState();
    setMessage("formulario enviado con éxito");
    setTimeout(() => {
      navigate("/Home");
    }, 3000);
  };
  return (
    <>
      <div className="Title">
        <h2> &#128512; RESERVA CON NOSOTROS &#128512;</h2>
      </div>
      <section className="BodyContainer">
        <div className="FormTextContainer">
          <form className="FormContainer" onSubmit={handleSubmit}>
            <div className="InputName">
              <input
                className="test"
                type="text"
                name="username"
                placeholder="Nombre"
                onChange={handleInputChange}
                value={data.username}
              />
            </div>
            <div className="InputMail">
              <input
                type="text"
                name="email"
                placeholder="E-mail"
                onChange={handleInputChange}
                value={data.email}
              />
            </div>
            <div className="InputDate">
              <input
                type="date"
                name="date"
                placeholder="Date"
                onChange={handleInputChange}
                value={data.date}
              />
            </div>
            <div className="InputTime" data-for="time">
              <input
                type="time"
                name="time"
                placeholder="Time"
                onChange={handleInputChange}
                value={data.time}
              />
            </div>
            <div className="InputParty">
              <input
                type="text"
                name="party"
                placeholder="Tamaño del grupo"
                onChange={handleInputChange}
                value={data.party}
              />
            </div>
            <div className="ButtonContainer">
              <button className="button" type="submit" disabled={btnDisabled}>
                Enviar
              </button>
            </div>
            <article className="Message">{message}</article>
          </form>
          <div className="TextContainer">
            <div className="TextWaitYou">
              <p>
                ¿Deseoso de hincarle el diente a nuestras jugoosas hamburguesas?
                Rellena el formulario y reserva ya mismo ¡Te esperamos!
              </p>
            </div>
            <div className = 'SubText'>
              <p>
                Frase del día: 'Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse' <br></br><br></br>(Charles Baudelaire)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
