import React from "react";
import Gallery2 from "./Gallery2";
import hokeeLogo from "../assets/hokeeLogo.png";
import {Bounce  } from "react-awesome-reveal";

const Gallery = () => {
  return (
    <>
      {/* <div className="container figure ">
        <div className="row ">
          <div className="col-12">
            <a className="  " href="/">
              <img
                className="imgGallery figure-img img-fluid"
                src={hokeeLogo}
                width={200}
              />
            </a>
          </div>
        </div>
      </div> */}
        <Bounce>
        <h1 style={{ textAlign: "center" }} className="pb-5 pt-5 tituloGallery">
          Galería de 4 patas
        </h1>
      </Bounce>
      <Gallery2 />
    
      {/* <section>
        <div className="">
          <a href=" /" className="avolver pt-2">
            {" "}
            <p>Volver</p>
          </a>
        </div>
      </section> */}
    </>
  );
};

export default Gallery;
