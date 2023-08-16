import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import login from "../css/contacto.css";

// npm i @emailjs/browser

const Result = () => {
  return <p>Mensaje enviado</p>;
};
function ContactComponent(props) {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y77wgx7",
        "template_p4th3sl",
        e.target,
        "VZCDTgZoOTA3lePFn"
      )
      .then(
        (result) => {
          console.log(result.text);
          // alert("Mensaje enviado");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  //hide result
  setTimeout(() => {
    showResult(false);
  }, 3000);

  return (
    <div className="contact container py-5" id="contacto">
      <div className="row rowcontact">
        <div className="col-lg-12 mx-auto">
          <div className="card cardC">
            <div className="card-body card-body1">
              <div className="row">
                <div className="">
                  <div className="headC text-center text-white py-3">
                    <h1>Contactanos</h1>
                  </div>
                </div>
              </div>

              <form
                className="form py-3 text-c "
                action=""
                onSubmit={sendEmail}
              >
                <div className="form-row my-2 form-group text-c">
                  <div className="col-lg-12">
                    <input
                      type="text"
                      name="user_name"
                      className="effect-1 "
                      placeholder="Nombre"
                      id="username"
                      required
                      pattern="[a-zA-Z0-9]+"
                      minLength="2"
                      maxLength="20"
                    />

                    <span className="Focus-border"></span>
                  </div>
                </div>
                <div className="form-row pb-2 form-group">
                  <div className="col-lg-12 ">
                    <input
                      type="email"
                      name="email"
                      className="effect-1"
                      placeholder="Correo electrónico"
                      pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                      maxLength="30"
                      required
                    />

                    <span className="Focus-border"></span>
                  </div>
                </div>
                <div className="form-row pt-2">
                  <div className="col-lg-12 pb-4">
                    <textarea
                      rows="4"
                      name="message"
                      className="effect-1 "
                      placeholder="Mensaje"
                      required
                      maxLength="400"
                    
                      minLength="2"
                    />
                    <span className="Focus-border"></span>
                  </div>
                </div>
                <div className="form-row  ">
                  <div className=" col-lg-12">
                    <p>
                      <input type="checkbox" required />
                      No soy un robot
                    </p>
                  </div>
                </div>
                <div className="btn col-lg-12">
                  <input type="submit" value="Enviar" className="btnH" />
                </div>
                <div>{result ? <Result /> : null}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
