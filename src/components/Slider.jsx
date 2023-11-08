import React from "react";
import olafR from "../assets/olafR.jpg";
import blancaR1 from "../assets/blancaR1.jpg";
import simon1 from "../assets/simon1.jpg";
import { JackInTheBox } from "react-awesome-reveal";
import { Bounce } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import slider from "../css/slider.css";
import { Link } from "react-scroll";

const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner slide1" id="slider">
        <div className="carousel-item active" data-bs-interval="3000">
          <img
            src={olafR}
            className="d-block w-100 img-fluid imgS mx-auto"
            alt="..."
          />
          <div className="carousel-caption carru ">
            <Bounce>
              <div>
                <h1 className="titulo h1Slider ">
                  <strong>FOTOGRAFIA DE MASCOTAS<br />EN VALENCIA</strong>
                </h1>
              </div>
            </Bounce>
            <div>
              <JackInTheBox>
                <button className="btn btnS btn3 ">
                  <Link  to="gallery">
                    <h6> Visitar galería</h6>
                  </Link>
                </button>
              </JackInTheBox>
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="3000">
          <img
            src={blancaR1}
            className="d-block w-100 img-fluid imgS mx-auto"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block carru">
            <Bounce>
              <div>
                <h1 className="titulo h1Slider">
                  <strong>FOTOGRAFIA DE MASCOTAS <br />EN VALENCIA</strong>
                </h1>
              </div>
            </Bounce>
            <div>
              <JackInTheBox>
                <button className="btn btnS btn3 ">
                  <Link to="preguntas">
                    <h6>Quiero saber más</h6>
                  </Link>
                </button>
              </JackInTheBox>
            </div>
          </div>
        </div>

        <div className="carousel-item " data-bs-interval="3000">
          <img
            src={simon1}
            className="d-block w-100 img-fluid imgS mx-auto"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block  carru ">
            <Bounce>
              <div className="">
                <h1 className="titulo h1Slider">
                  <strong>FOTOGRAFIA DE MASCOTAS<br />EN VALENCIA</strong>
                </h1>
              </div>
            </Bounce>
            <div>
              <JackInTheBox>
                <button className="btn btn2 btnS">
                  <Link to="contacto">
                    <h6 className="titulo2">Reserva tu sesión</h6>
                  </Link>
                </button>
              </JackInTheBox>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
