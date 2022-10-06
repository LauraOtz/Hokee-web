import React, { useState } from "react";
import contacto from "../css/contacto.css";
import emailjs from "@emailjs/browser";

function Contacto() {
  const [to_name, setTo_name] = useState("");
  const [from_name, setFrom_name] = useState("");
  const [message, setMessage] = useState("");

  const submitInfo = (event) => {
    event.preventDefault(event);

    console.log(to_name + from_name + message);

    const emailContent = {
      to_name: to_name,
      from_name: from_name,
      message: message,
    };

    emailjs
      .send(
        "service_w5b2q8p",
        "template_p4th3sl",
        emailContent,
        "VZCDTgZoOTA3lePFn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact container py-5">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="head text-center text-white py-3">
                    <h3>Contactanos</h3>
                  </div>
                </div>
              </div>
              <form className="form py-3">
                <div className="form-row my-4">
                  <div className="col-lg-12">
                    <input
                      type="text"
                      name="to_name"
                      tabIndex="1"
                      className="effect-1"
                      placeholder="Ingrese su nombre"
                      onChange={(event) => {
                        setTo_name(event.target.value);
                      }}
                      required
                      autoFocus
                    />
                    <span className="Focus-border"></span>
                  </div>
                </div>
                <div className="form-row pb-4 ">
                  <div className="col-lg-12 ">
                    <input
                      type="email"
                      name="from_name"
                      tabIndex="2"
                      className="effect-1 "
                      placeholder="Ingrese su correo electrónico"
                      onChange={(event) => {
                        setFrom_name(event.target.value);
                      }}
                      required
                    ></input>
                    <span className="Focus-border"></span>
                  </div>
                </div>
                <div className="form-row pt-2">
                  <div className="col-lg-12">
                    <textarea
                      type="text"
                      tabIndex="3"
                      name="message"
                      className="effect-1 "
                      placeholder="Ingrese su mensaje"
                      onChange={(event) => {
                        setMessage(event.target.value);
                      }}
                      required
                    ></textarea>
                    <span className="Focus-border"></span>;
                  </div>
                </div>
                <div className="form-row pt-4 ">
                  <div className="offset-4 col-lg-12">
                    <p>
                      <input type="checkbox" />
                      No soy un robot
                    </p>
                  </div>
                  <div className="offset-4 col-lg-12">
                    <button className="btn1" type="submit" onClick={submitInfo}>
                      Enviar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contacto;
