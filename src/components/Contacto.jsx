import React, { useRef } from "react";
import contacto from "../css/contacto.css";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const form = useRef();
  //envío de email js
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);
    emailjs
      .send(
        "service_LUrroJlhrmiBuTqpOckCq",
        "template_p4th3sl",
        e,
        "E-V4j6nx65nmB6oVJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          //alert("Mensaje enviado");
        },
        (error) => {
          console.log(error.text);
          //alert("error");
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
              <form className="form py-3" onSubmit={sendEmail}>
                <div className="form-row my-4">
                  <div className="col-lg-12">
                    <input
                      type="text"
                      name="name"
                      className="effect-1"
                      placeholder="Ingrese su nombre"
                    />
                    <span className="Focus-border"></span>
                  </div>
                </div>
                <div className="form-row pb-4 ">
                  <div className="col-lg-12 ">
                    <input
                      type="email"
                      name="email"
                      className="effect-1 "
                      placeholder="Ingrese su correo electrónico"
                    ></input>
                    <span className="Focus-border"></span>
                  </div>
                </div>
                <div className="form-row pt-2">
                  <div className="col-lg-12">
                    <input
                      type="text"
                      name="message"
                      className="effect-1"
                      placeholder="Ingrese su mensaje"
                    ></input>
                    <span className="Focus-border"></span>
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
                    <button className="btn1" type="submit" value="Send">
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
};

export default Contacto;
