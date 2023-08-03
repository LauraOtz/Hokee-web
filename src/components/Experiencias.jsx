import React from "react";
import experiencias from "../css/experiencias.css";
import olie1 from "../assets/olie1.jpg";
import huma1 from "../assets/huma1.jpg";
import otti from "../assets/otti.jpg";
import { Bounce } from "react-awesome-reveal";

const PreguntasFrecuentes = () => {
  return (
    <>
      < Bounce>
        <h1 className="Titulop pt-5" id="Experiencias">
          <b> Palabras de algunos clientes</b>
        </h1>
      </ Bounce>
      < Bounce>
        <h2 className="Titulop pb-5">
          <b>Gracias! Siempre gracias!</b>{" "}
        </h2>
      </ Bounce>
      

      <div className="cardE mb-3">
        <div className="row g-0">
          <div className="col-md-4 pt-3">
            <img src={huma1} className="img-fluid imgExp" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body cardEx ">
              <h5 className="card-title mb-3">
                <b>Irene y Humahuaca</b>
              </h5>
              <p className="card-text textE ">
                “Ayyyy Laurita muero de amor con cada una de las fotos! No puedo
                sacarme la sonrisa de la boca! Te juro que captaste a la Huma
                que es ella en cada una de las fotos! Y es para siempre! Me voy
                a abrazarla!!! Bello bello bello todo!!!
              </p>
              <span className="text-dark">
                San Miguel de Tucumán - Argentina - 2020
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="hrp" />
      <div className="cardE mb-3">
        <div className="row g-0">
          <div className="col-md-4 pt-3">
            <img src={olie1} className="img-fluid  imgExp " alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body cardEx">
              <h5 className="card-title mb-3 ">
                <b> Gini Rohmer Litzmann</b>
              </h5>
              <p className="card-text textE">
                “Tremendas las fotos!!!! Estoy enamorada!!! Gracias! Hace años
                quería sacarles fotos así a mis pequeños, gracias por cumplir mi
                sueño!"
              </p>
              <span className="text-dark">
                San Miguel de Tucumán - Argentina - 2020
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="hrp" />
      <div className="cardE mb-3">
        <div className="row g-0">
          <div className="col-md-4 pt-3">
            <img src={otti} className="img-fluid imgExp" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body cardEx pb-5">
              <h5 className="card-title mb-3 ">
                <b> Silvia y Otti</b>
              </h5>
              <p className="card-text textE ">
                “Lau recién termino de trabajar y estoy viendo las fotos, unas
                ganas de llorar. Sus ojos en todas las fotos! lo amo tanto!
                Gracias!!”
              </p>
              <span className="text-dark">
                San Miguel de Tucumán - Argentina - 2022
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="hrp" /> */}
    </>
  );
};

export default PreguntasFrecuentes;
