import React from "react";
import LightSpeed from "react-reveal/LightSpeed";
import preguntas from "../css/preguntas.css";

const Preguntas = () => {
  return (
    <>
      <div className="container my-5" id="preguntas">
        <LightSpeed>
          <h2 className="tituloPreg pb-2">Resolvamos algunas dudas</h2>
        </LightSpeed>
        <div className="row ">
          <div className="col-12 col-md ">
            <div className="card card-datosP  text-center">
              <div className="card-body">
                <h3 className="card-title iconP">
                  <i className="fa fa-paw fa-2x" aria-hidden="true"></i>
                </h3>

                <p className="">
                  Todas las mascotas pueden ser retratadas, no es necesario
                  ningún entremaniento previo. El único requisito es que sean
                  amigables
                </p>
                <p>
                  Puedes traer accesorios y la ropita de tu peludo que más te
                  gusten
                </p>
              </div>
            </div>
          </div>

          <div className="col-12  col-md">
            <div className="card card-datosP  text-center">
              <div className="card-body">
                <h3 className="card-title iconP">
                  <i className="fa fa-clock-o fa-2x" aria-hidden="true"></i>
                </h3>

                <p className="">
                  Una sesión puede durar una o varias horas. Respetamos el ritmo
                  de tu mascota sin apuros. Ven con tiempo disponible y
                  disfruta!
                </p>
                <p>El trabajo se entrega en una semana aproximadamente</p>
              </div>
            </div>
          </div>

          <div className="col-12  col-md">
            <div className="card card-datosP  text-center">
              <div className="card-body">
                <h3 className="card-title iconP">
                  <i className="fa fa-camera fa-2x" aria-hidden="true"></i>
                </h3>

                <p>
                  La mascota debe ser acompañada sí o sí de su humano de mayor
                  confianza. No puede venir con alguien ageno a él.{" "}
                </p>
                <p>
                  Todas las fotos se comparten en una galería, desde ahí
                  seleccionas la cantidad que quieras para ser editadas y
                  entregadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preguntas;
