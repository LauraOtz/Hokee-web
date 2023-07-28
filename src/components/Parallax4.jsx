import React from "react";
import parallax2 from "../css/parallax2.css";
import Bounce from "react-reveal/Bounce";

const Parallax4 = () => {
  return (
    <section id="novedades" className="ancla">
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0 card">
            <div className="parallax2"></div>
            <div className="card-img-overlay text-center text-parall">
              <h2 className="titulopa2">
                No es solo una sesión de fotos, es una expresión de amor
              </h2>
              <h2 className="titulopa3"></h2>
                <Bounce left>
                <button
                  type="button"
                  className="btn btn-light btn-card  mt-3 btn-parall "
                >
                  <a className=" text-center" href="/gallery">
                    <b>Visitar galeria</b>
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
