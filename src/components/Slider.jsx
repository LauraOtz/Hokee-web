import React from "react";
// import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import slider5 from "../assets/slider5.jpg";
import slider from "../css/slider.css";

const Slider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div> */}
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img src={slider2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <div>
              <h1>FOTOGRAFIA DE MASCOTAS</h1>
            </div>
            <div>
              <button className="btn btn2">
                <h2>Reserva tu sesión ahora</h2>
              </button>
            </div>
            <div>
              <button className="btn btn3">
                <h3>Quiero saber más</h3>
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src={slider3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <div>
              <h1>FOTOGRAFIA DE MASCOTAS</h1>
            </div>
            <div>
              <button className="btn btn2">
                <h2>Reserva tu sesión ahora</h2>
              </button>
            </div>
            <div>
              <button className="btn btn3">
                <h3>Quiero saber más</h3>
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img src={slider4} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <div>
              <h1>FOTOGRAFIA DE MASCOTAS</h1>
            </div>
            <div>
              <button className="btn btn2">
                <h2>Reserva tu sesión ahora</h2>
              </button>
            </div>
            <div>
              <button className="btn btn3">
                <h3>Quiero saber más</h3>
              </button>
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
