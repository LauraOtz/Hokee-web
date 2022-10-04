import React from "react";
import contacto from "../css/contacto.css";

const Contacto = () => {
  return (
    <section className="contact">
      <div className="container py-5">
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
                <div className="form py-3">
                  <div className="form-row my-4">
                    <div className="col-lg-12">
                      <input
                        type="text"
                        className="effect-1"
                        placeholder="Ingrese su nombre"
                      />
                      <span className="Focus-border"></span>
                    </div>
                  </div>
                  <div className="form-row pb-4 ">
                    <div className="col-lg-12 ">
                      <input
                        type="text"
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
                      <button className="btn1">Enviar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
