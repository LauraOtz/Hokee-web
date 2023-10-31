import React from "react";
import { Routes, Route } from "react-router-dom";
// import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Paquetes from "../pages/Paquetes";
import NotFound from "../pages/NotFound";
import Gallery from "../components/Gallery";
import Login from "../pages/Login";
import Registro from "../pages/Registro";

const RoutesDos = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/paquetes" element={<Paquetes />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  );
};

export default RoutesDos;
