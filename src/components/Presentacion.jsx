import React from "react";
import yop from "../assets/yop.jpg";
import presentacion from "../css/presentacion.css";
import { Bounce } from "react-awesome-reveal";

const Presentacion = () => {
  return (
    <>
      <div className="cardE mb-3 " id="presentacion">
        <Bounce>
          <h5 className="tituloPres  pt-5">
            ¿Estás listo para tu fantástica sesión de fotos?
          </h5>
        </Bounce>
        <div className="row g-0">
          <div className="col-md-4 imgPres">
            <img src={yop} className="img-fluid  imgExp " alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body cardEx">
              <h3 className="tituloPres2 pb-2">Primero me presento</h3>
              <p className="textoPre">
              Detrás de cámara me encuentro yo, Lau. Tengo 36 años, soy argentina, técnica en comunicación, fotógrafa, maquilladora y programadora en proceso. ¡Este sitio web lo hice yo, es el primero! ¡Espero les guste!
              </p>
             

              <p className=" textoPre">
              Hace unos años descubrí mi pasión por la fotografía. Un tiempo después llegó la inspiración de retratar perritos y ya no hubo vuelta atrás. ¡Descubrí el mejor trabajo del mundo! Podría hacerlo cada día por siempre, solo con el fin de vivirlo. He tenido el privilegio de conocer personas hermosas y mascotas increíbles, historias que han tocado mi corazón. En cada sesión entrego una parte de mí. Es un encuentro que llena mi alma, y créeme que no estoy exagerando.
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
