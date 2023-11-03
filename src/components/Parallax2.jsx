import React from "react";
import parallax2 from "../css/parallax2.css"
import { Bounce } from "react-awesome-reveal";


const Parallax2 = () => {
  return (
    <section id="novedades" className="ancla">
  <div className="container-fluid mb-5">
    <div className="row">
      <div className="col p-0 card">
        
          <div className="parallax2"></div>
          <div className="card-img-overlay text-center text-parall">
            
            <h2 className="titulopa2">
           ¡Viví la experiencia!
            </h2>
        
                       
            <Bounce left>
            <button type="button" className="btn  btn-card  my-3 btn-parall ">
              
            <a className=" text-center" href="/paquetes"><b>QUIERO VER LOS PAQUETES</b> </a>
            </button>
            </Bounce>
             
          </div>
        
      </div>
    </div>
  </div>
</section>
  )
}


export default Parallax2
