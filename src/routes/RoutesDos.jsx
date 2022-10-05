import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";

import Experiencias from "../pages/Experiencias";
import Paquetes from "../pages/Paquetes";
import SobreMi from "../pages/SobreMi";
import PreguntasFrecuentes from "../pages/PreguntasFrecuentes";
import NotFound from "../pages/NotFound";
import FinalBoard from "../pages/FinalBoard";

const RoutesDos = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/galeria" element={<FinalBoard
         />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/sobremi" element={<SobreMi />} />
        <Route path="/preguntasfrecuentes" element={<PreguntasFrecuentes />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RoutesDos;
