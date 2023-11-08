import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
import preguntas from "../css/preguntas.css";

const Preguntas = () => {
  return (
    <>
      <div className="container my-5" id="preguntas">
         
        <JackInTheBox>
          <h2 className="tituloPreg">Las sesiones de fotos a tu peludo se realizan en <strong>Valencia</strong> </h2>
        </JackInTheBox>
          <p className="tituloPreg2">Pueden ser <strong>perros, gatos, conejos</strong> o ¡espero tu propuesta! </p>
          <p className="tituloPreg2" >Acordamos un lugar verde en exteriores, hacemos una versión street o puedes elegir estudio. </p>
          <p className="tituloPreg2" >En la galería puedes ver ambos estilos, y si me sigues en <a href="https://www.instagram.com/hokee.fotografiademascotas/"><b>Instagram</b></a> podrás ver más fotos, stories de backstage en vivo y conocer más de este precioso mundo.</p>
          <p className="tituloPreg2" >Para ver en detalle qué incluyen los paquetes y precios pincha aquí <a href="paquetes">Paquetes</a></p>
          <h3 className="tituloPreg pb-2">Resolvamos algunas dudas</h3>
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
                  ¡disfruta!
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
