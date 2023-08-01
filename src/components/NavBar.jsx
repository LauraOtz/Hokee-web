import React from "react";
// import { Link } from "react-scroll";
import logoH from "../assets/logoH.png";
import navBar from "../css/navBar.css";
// import { NavLink } from "react-router-dom";

const NavBar = () => {
  const body = document.body;
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll <= 0) {
      body.classList.remove("scroll-up");
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains("scroll-down")
    ) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  });

  return (
    <nav className="navbar navbar-expand-sm fixed-top">
      <div className="container-fluid ContenedorN">
        <a className="navbar-brand " href="/">
          <img
            className="imgNav "
            src={logoH}
            alt="Bootstrap"
            height="70"
          />
        </a>

        <button
          className="navbar-toggler mt-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse itemNav "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 itemNav">
            <li className="nav-item">
              <a
                // activeClass="active"
                href="#slider"
                // spy={value.toString()}
                // smooth={true}
                offset={-50}
                duration={500}
                className="nav-link"
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                // activeClass="active"
                href="#presentacion"
                // spy={value.toString()}
                // smooth={true}
                offset={-50}
                duration={500}
                className="nav-link"
              >
                Conoceme
              </a>
            </li>

            <li className="nav-item">
              <a
                // activeClass="active"
                href="#Experiencias"
                // spy={value.toString()}
                // smooth={true}
                offset={-30}
                duration={500}
                className="nav-link"
              >
                Experiencias
              </a>
            </li>
            <li className="nav-item">
              <a
                // activeClass="active"
                href="#preguntas"
                // spy={value.toString()}
                // smooth={true}
                offset={-100}
                duration={500}
                className="nav-link"
              >
                Preguntas
              </a>
            </li>
            <li className="nav-item">
              <a
                // activeClass="active"
                href="#contacto"
                // spy={value.toString()}
                // smooth={true}
                offset={-100}
                duration={500}
                className="nav-link"
              >
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a
                to="/gallery"
                // spy={value.toString()}
                // smooth={true}
                offset={50}
                duration={500}
                className="nav-link"
              >
                Galería
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/paquetes"
                className="nav-link"
                // spy={value.toString()}
                // smooth={true}
                offset={50}
                duration={500}
                
              >
                Paquetes
              </a>
              <a href=""></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
