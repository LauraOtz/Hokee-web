import React from "react";
import logoFo from "../assets/logoFo.png";
import perro_caniche from "../assets/instagram/perro_caniche.jpg"
import dos_gatos from "../assets/instagram/dos_gatos.jpg"
import perro_con_panuelo from "../assets/instagram/perro_con_panuelo.jpg"
import perro_marron from "../assets/instagram/perro_marron.jpg"
import perro_mono from "../assets/instagram/perro_mono.jpg"
import cobayo from "../assets/instagram/cobayo.jpg"
import footer from "../css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container  d-flex ">
          <div className="row conteinerFooter">
            <div className=" col-md-6 col-lg-3">
              <div>
                <h3 className="pt-3 text-f">Te invito a seguirme </h3>
                <p className="pt-3 footer-text">Verás fotos de perritos y un poco de mi día a día </p>
                <a
                  href="https://www.instagram.com/hokee.fotografiademascotas/"
                  target="_blank"
                  
                >
                  <img
                    src={logoFo}
                    className="imgLogo"
                    alt="logo instagram"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-project">
                <a
                  href="https://www.instagram.com/hokee.fotografiademascotas/"
                  target="_blank"
                  className="aF "
                >
                  <img src={cobayo} className="imgCuadro" alt="perro salchicha" />
                </a>
                <a
                  href="https://www.instagram.com/hokee.fotografiademascotas/"
                  target="_blank"
                  className="aF "
                >
                  <img src={dos_gatos} className="imgCuadro" alt="dos gatos" />
                </a>
                <a
                  href="https://www.instagram.com/hokee.fotografiademascotas/"
                  target="_blank"
                  className="aF "
                >
                  <img src={perro_caniche} className="imgCuadro" alt="perro bulldog" />
                </a>
                <a
                  href="https://www.instagram.com/hokee.fotografiademascotas/"
                  target="_blank"
                  className="aF "
                >
                  <img src={perro_con_panuelo} className="imgCuadro" alt="perro con paniuelo" />
                </a>
                <a
                  href="https://www.instagram.com/hokee.fotografiademascotas/"
                  target="_blank"
                  className="aF "
                >
                  <img src={perro_marron} className="imgCuadro" alt="perro marron" />
                </a>
                <a
                  href="https://www.instagram.com/hokee.fotografiademascotas/"
                  target="_blank"
                  className="aF "
                >
                  <img src={perro_mono} className="imgCuadro" alt="perro con monio" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-text col-md-6 col-lg-12 ">
          <p>
            © Copyright 2023 HOKEE - FOTOGRAFÍA DE MASCOTAS - TODOS LOS DERECHOS
            RESERVADOS - DESARROLLADO POR <a href="www.pixela.es">PIXELA</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
