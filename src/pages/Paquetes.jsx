import React from "react";
import ciro from "../assets/ciro.jpg";
import paquetes from "../css/paquetes.css";
import Footer from "../components/Footer";
import logoH from "../assets/logoH.png";
import {Bounce  } from "react-awesome-reveal";

const Paquetes = () => {
  return (
    <>
      {/* -----------------------------------contenido */}
      <div className="contPaq notF">
        <img src={ciro} className="card-img  imgPaq" alt="..." />
        <div className="card-img-overlay ">
          <div className="container card-text text-white textoPaq position-absolute backpaq ">
            <div className="row justify-content-center pb-2">
              <div className="col-6">
                <h2 className="card-title tituloPaq text-white pt-3">
                  Quiero mi sesión!
                </h2>
              </div>
            </div>
            <div className="row justify-content-center logoPaq ">
              <div className="col-lg-6  .col-md-6 .col-sm-12  ">
                <h2>Corazón de melón</h2>
                <ul className="textLi">
                  <li className="text-star">
                    Participación sólo de una mascota
                  </li>
                  <li>8 fotografías en alta calidad</li>
                  <li>
                    Locación a pactar en estudio, a domicilio o exteriores.{" "}
                  </li>
                </ul>
                <p>50€</p>
              </div>

              <div className="col-lg-6 .col-md-6 .col-sm-12 ">
                <h2>Corazón de chocolate</h2>
                <ul className="textLi">
                  <li>
                    Participación de una mascota con su grupo familiar (hasta 4
                    personas)
                  </li>
                  <li>20 fotografías en alta calidad</li>
                  <li>
                    Locación a pactar en estudio, a domicilio o exteriores.{" "}
                  </li>
                </ul>
                <p>90€</p>
              </div>
            </div>

            <div className="row justify-content-center ">
              <div className="row justify-content-center logoH ">
                <div className="col-6 pt-0">
                  <a className="navbar-brand nav-link  " href="/">
                    <Bounce >
                      <img
                        className="imgNav "
                        src={logoH}
                        alt="Bootstrap"
                        height="50"
                      />
                    </Bounce >
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row rowPaq">
          <div className="col-12 ">
            <h2 className=" tituloPaq2  pt-4 text-white">
              Ten en cuenta esta info
            </h2>
            {/* --------------------------------- */}
            <div className="row textInfo">
              <div className="col-12 col-md">
                <div className="card card-datosInfo  text-center ">
                  <div className="card-body  mt-3">
                    <ul className="textLi">
                      <li>
                        Sí puede participar más de una mascota, en ese caso se
                        abona un 50% adicional, lo que incluye 10 fotos más por
                        mascota.{" "}
                      </li>
                      <li>
                        Pueden también sumarse más humanos, consultar por
                        familias numerosas.
                      </li>
                      <li>Las fotografías se envían por correo electrónico </li>
                      <li>
                        Todas las fotos se entregan editadas, en alta calidad
                        (como para imprimir) y en baja (redes sociales)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md">
                <div className="card card-datosInfo  text-center ">
                  <div className="card-body  mt-3">
                    <ul className="textLi">
                      <li>
                        Estos paquetes son a modo standard, podemos personalizar
                        la entrega a tu gusto y necesidades
                      </li>
                      <li>
                        No se entrega ninguna fotografía sin editar, ni se
                        modifica luego la edición. Para ver mi estilo puedes
                        revisar la galeria de esta pagina o mi Instagram.
                      </li>
                      <li>
                        Pueden aplicarse cargos adicionales en sesiones en exterior o domiciliarias.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="">
          <a href="/" className="avolver pt-2">
            {" "}
            <p>Volver</p>
          </a>
        </div>
      </section>

      <section>
        <div className="wh">
          <a
            href=" https://api.whatsapp.com/send?phone=3466351305"
            className="whatsappP"
            target="_blank"
          >
            {" "}
            <i className="fa fa-whatsapp whatsapp-iconP"></i>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Paquetes;
