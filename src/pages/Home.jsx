import React from "react";
import Slider from "../components/Slider";
import Presentacion from "../components/Presentacion";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import Preguntas from "../components/Preguntas";
import Paquetes from "../components/Paquetes";

import Experiencias from "../components/Experiencias";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <Slider />
      <br />
      <section id="Presentacion">
        <Presentacion />
      </section>
      <br />
      <section id="Experiencias">
        <Experiencias />
      </section>
      <section>
        <Preguntas />
      </section>
      <br />
      <br />
      <Paquetes />
      <br />
      <br />

      <Contacto />
      <a
        href=" https://api.whatsapp.com/send?phone=543816510287"
        class="whatsapp"
        target="_blank"
      >
        {" "}
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <br />
      <br />

      <Footer />
    </>
  );
};

export default Home;
