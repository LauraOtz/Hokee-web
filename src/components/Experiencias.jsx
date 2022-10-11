import React from "react";
import slider1 from "../assets/slider1.jpg";
import slider3 from "../assets/slider3.jpg";
import  slider2  from "../assets/slider2.jpg";

import "../css/PreguntasFrecuentes.css"

const PreguntasFrecuentes = () => {


  return (
    
    <>
    <h1 className="Titulop"> Experiencias</h1>
 
    <div className="card mb-3" >
    <div className="row g-0">
      <div className="col-md-4">
        <img src={slider1} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title"><strong> Card title</strong></h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer This is a wider card with supporting text below as a natural lead-in to additional content.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer This content is a little bit longer.</p>
         
        </div>
      </div>
    </div>
  </div>
  <hr className="hrp" />

  <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={slider2} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"> <strong> Card title</strong></h5>
        <p className="card-text">This is a wider cardThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer  with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       
      </div>
    </div>
  </div>
</div>
<hr className="hrp" />
<div className="card mb-3" >
    <div className="row g-0">
      <div className="col-md-4">
        <img src={slider3} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title"><strong> Card title</strong></h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer additional content. This content is a little bit longer.</p>
       
        </div>
      </div>
    </div>
  </div>
  <hr className="hrp" />
  
    </>
  );
  };


export default PreguntasFrecuentes