import React from "react";
import logoFo from "../assets/logoFo.png";
import perro_bulldog from "../assets/instagram/perro_bulldog.jpg"
import dos_gatos from "../assets/instagram/dos_gatos.jpg"
import perro_con_panuelo from "../assets/instagram/perro_con_panuelo.jpg"
import perro_marron from "../assets/instagram/perro_marron.jpg"
import perro_mono from "../assets/instagram/perro_mono.jpg"
import salchicha_perro from "../assets/instagram/salchicha_perro.jpg"
import footer from "../css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container  d-flex ">
          <div className="row conteinerFooter">
            <div className=" col-md-6 col-lg-3">
              <div>
                <h2 className="pt-3 text-f">Sígueme </h2>
                <a
                  href="https://www.instagram.com/hokee.fotografiademascotas/"
                  target="_blank"
                >
                  {" "}
                  <img
                    src={logoFo}
                    className="imgLogo footer-social"
                    alt="..."
                  />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-project">
                <a
                  href="https://www.instagram.com/hokee.fotografiademascotas/"
                  target="_blank"
                >
                  <img src={salchicha_perro} className="imgCuadro" alt="perro salchicha" />
                </a>
                <a
                  href="https://www.instagram.com/hokee.fotografiademascotas/"
                  target="_blank"
                >
                  <img src={dos_gatos} className="imgCuadro" alt="dos gatos" />
                </a>
                <a
                  href="https://www.instagram.com/hokee.fotografiademascotas/"
                  target="_blank"
                >
                  <img src={perro_bulldog} className="imgCuadro" alt="perro bulldog" />
                </a>
                <a
                  href="https://www.instagram.com/hokee.fotografiademascotas/"
                  target="_blank"
                >
                  <img src={perro_con_panuelo} className="imgCuadro" alt="perro con paniuelo" />
                </a>
                <a
                  href="https://www.instagram.com/hokee.fotografiademascotas/"
                  target="_blank"
                >
                  <img src={perro_marron} className="imgCuadro" alt="perro marron" />
                </a>
                <a
                  href="https://www.instagram.com/hokee.fotografiademascotas/"
                  target="_blank"
                >
                  <img src={perro_mono} className="imgCuadro" alt="perro con monio" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-text col-md-6 col-lg-12 ">
          <p>
            © Copyright 2023 HOKEE - PET PHOTOGRAPY - TODOS LOS DERECHOS
            RESERVADOS - BY LAURA ORTIZ - Contacto: hokeepetphoto@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
