import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
import preguntas from "../css/preguntas.css";

const Preguntas = () => {
  return (
    <>
      <div className="container my-5" id="preguntas">
        <JackInTheBox>
          <h2 className="tituloPreg pb-2">Resolvamos algunas dudas</h2>
        </JackInTheBox>
          <h3 className="tituloPreg">¿Dónde me encuentro?</h3>
          <p className="tituloPreg2">Vivo en Valencia, España. Las fotos se realizan en <strong>exteriores</strong> parques o plazas, en el lugar que acordemos por dicha zona.</p>
          <p className="tituloPreg2" > Tambien puedes elegis la ftografia de estudio. ambas se ecuentran en la sección galeria para que las conozcas.</p>
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
                  gusten.
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
                <p>El trabajo se entrega en una semana aproximadamente.</p>
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
                  confianza. No puede venir con alguien ajeno a él.{" "}
                </p>
                <p>
                Puedes elegir tu mismo las fotos que quieras o dejar que yo seleccione las mejores. Siempre podrás sumar más fotos a la entrega.
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
