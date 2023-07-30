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
                Detrás de cámara me encuento yo, Lau. Tengo 36 años, soy
                argentina, técnica en comunicación, fotógrafa, maquilladora y
                programadora en proceso, éste sitio web lo hice yo, es el
                primero! espero les guste!
              </p>
              <p className=" textoPre">
                Mi amor por los animales viene conmigo desde pequeña, la paz que
                me transmiten y el amor que siento por ellos es algo muy dificil
                de explicar, sé que si amaste a un compañero de 4 patas
                entiendes de lo que hablo.
              </p>

              <p className=" textoPre">
                Hace unos años descubrí mi pasión por la fotografía, un tiempo
                después llegó la inspiración de retratar animales, y ya no hubo
                vuelta atrás, descubrí el mejor trabajo del mundo! podría
                hacerlo cada día por siempre, sólo con el fin de vivirlo. He
                tenido el privilegio de conocer peronas hermosas y mascotas
                increibles, historias que han tocado mi corazón, en cada sesión
                entrego una parte de mí, es un encuentro que llena mi alma, y
                creeme que no estoy exgerando.
              </p>
              <p className=" textoPre">
                Agradezco profundamente haber encontrado esta pasión, poder
                experimentarla y a través de ella darles a ustedes recuerdos
                maravillosos que van a llenar sus corazones para siempre.
              </p>
              <p className=" textoPre">
                Siéntete libre de ponerte en contacto conmigo, será un placer
                resolver todas tus dudas y conocer tu historia. Te espero para
                crear el recuerdo que te hará sonreir para siempre. Te lo vas a
                perder?
              </p>
            </div>
          </div>
        </div>
      </div>
        </>
  );
};

export default Presentacion;
