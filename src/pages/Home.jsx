import React from "react";
import Slider from "../components/Slider";
import Presentacion from "../components/Presentacion";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Slider />
      <br />
      <Presentacion />
      <br />

      <Contacto />
      <br />
      <br />

      <Footer />
    </>
  );
};

export default Home;
