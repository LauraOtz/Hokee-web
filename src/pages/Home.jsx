import React from "react";
import Slider from "../components/Slider";
import Presentacion from "../components/Presentacion";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

import Experiencias from "../components/Experiencias";

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

      <Experiencias/>
      </section>
      <br />

      <Contacto />
      <br />
      <br />

      <Footer />
    </>
  );
};

export default Home;
