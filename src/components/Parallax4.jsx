import React from "react";
import parallax2 from "../css/parallax2.css";
import { Bounce } from "react-awesome-reveal";

const Parallax4 = () => {
  return (
    <section id="novedades" className="ancla">
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0 card">
            <div className="parallax2"></div>
            <div className="card-img-overlay text-center text-parall">
              <h3 className="titulopa2 pt-3">
                No es solo una sesión de fotos, es una expresión de amor
              </h3>
              
                <Bounce left>
                <button
                  type="button"
                  className="btn btn-light btn-card  mt-3 btn-parall "
                >
                  <a className=" text-center" href="https://api.whatsapp.com/send?phone=34663531305">
                    <b>QUIERO ENVIARTE UN WHATSAPP</b>
                  </a>
                </button>
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax4;
