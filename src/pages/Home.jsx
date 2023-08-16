import React from "react";
import Slider from "../components/Slider";
import Presentacion from "../components/Presentacion";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import Preguntas from "../components/Preguntas";
import PaquetesLink from "../components/PaquetesLink";
import NavBar from "../components/NavBar";
import Experiencias from "../components/Experiencias";
import Parallax2 from "../components/Parallax2";
import Parallax3 from "../components/Parallax3";
import Parallax4 from "../components/Parallax4";
import "../css/home.css";

const Home = () => {
  // bloquear boton derecho
  // useEffect(() => {
  //   document.addEventListener("contextmenu", handlecontextmenu);
  //   return () => {
  //     document.removeEventListener("contextmenu", handlecontextmenu);
  //   };
  // }, []);
  // const handlecontextmenu = (e) => {
  //   e.preventDefault();
  //   alert("El botón derecho ha sido deshabilitado");
  // };
  return (
    <>
      <NavBar />

      <Slider />

      <section>
        <Presentacion />
      </section>

      <section id="PaquetesLink">
        <PaquetesLink />
      </section>

      <section id="Experiencias">
        <Experiencias />
      </section>
      {/* --------------parallax2----------- */}
      {/* --------------parallax3----------- */}

      <section id="PaquetesLink2">
        <Parallax2 />
      </section>

      <section id="PaquetesLink3">
        <Parallax3 />
      </section>

      <section id="PaquetesLink4">
        <Parallax4 />
      </section>

      <section>
        <Preguntas />
      </section>

      <section id="Contacto">
        <br />
        <br />
        <Contacto />
        <br />
      </section>

      <section>
        <div className="wh">
          <a
            href=" https://api.whatsapp.com/send?phone=3466351305"
            className="whatsapp"
            target="_blank"
          >
            {" "}
            <i className="fa fa-whatsapp whatsapp-icon"></i>
          </a>
        </div>
      </section>

      <br />
      <br />

      <Footer />
    </>
  );
};

export default Home;
