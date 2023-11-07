import React from "react";
import mujer_perro from "../assets/mujer_perro.jpg";
import presentacion from "../css/presentacion.css";
import { Bounce } from "react-awesome-reveal";

const Presentacion = () => {
  return (
    <>
      <div className="cardPr mb-3 " id="presentacion">
        <Bounce>
          <h5 className="tituloPres  pt-5">
            ¿Estás listo para tu fantástica sesión de fotos?
          </h5>
        </Bounce>
        <div className="row g-0">
          <div className="col-md-4 imgPres">
            <img src={mujer_perro} className="img-fluid  imgExp " alt="Laura con su perro pequeño" />
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="card-body cardEx">
              <h3 className="tituloPres2 pb-2">Conóceme</h3>
              <p className="textoPre">
             Soy Laura, argentina, técnica en comunicación, fotógrafa, maquilladora y programadora. ¡Este sitio web lo hice yo! ¡Espero les guste!
              </p>
             

              <p className=" textoPre">
              Hace unos años descubrí mi pasión por la fotografía. Un tiempo después llegó la inspiración de retratar perritos y ya no hubo vuelta atrás. ¡Descubrí el mejor trabajo del mundo! Podría hacerlo cada día por siempre, sólo con el fin de vivirlo. He tenido el privilegio de conocer personas hermosas y mascotas increíbles, historias que han tocado mi corazón.
              </p>
              <p className=" textoPre">
              Agradezco profundamente haber encontrado esta pasión y a través de ella darles a ustedes recuerdos maravillosos que van a llenar sus corazones por siempre.
              </p>
              {/* <p className=" textoPre">
              Te espero para crear el recuerdo que te hará sonreír para siempre. ¡Será un placer resolver todas tus dudas y conocer tu historia! ¿Te lo vas a perder?
              </p> */}
            </div>
          </div>
        </div>
      </div>
        </>
  );
};

export default Presentacion;
