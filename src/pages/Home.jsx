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
      <Presentacion />
      <br />
      <Experiencias/>
      <br />
      <Contacto />
      <br />
      <Footer />
    </>
  );
};

export default Home;
