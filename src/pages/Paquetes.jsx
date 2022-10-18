import React from "react";
import rash from "../assets/rash.jpg";
import rash2 from "../assets/rash2.jpg";
import paquetes from "../css/paquetes.css"

const Paquetes = () => {
  return (
    <>
    <div className="card">
      <div className="card-body">

      <img src={rash} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title tituloPaq">Corazón de sandía</h5>
        <p className="card-text text-dark textoPaq position-absolute">
          <p>

          15 fotografias digitales, sólo de la mascota
          </p>
          <p>

          Dos colores de fondo a eleccion
          </p>
          <p>

          Entrega vía email en alta calidad
          </p>

          
       
        </p>
       
      </div>
      </div>
    </div>
    <div className="card">
      <div className="card-body">

      <img src={rash} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title tituloPaq">Corazón de sandía</h5>
        <p className="card-text text-dark textoPaq position-absolute">
          <p>

          15 fotografias digitales, sólo de la mascota
          </p>
          <p>

          Dos colores de fondo a eleccion
          </p>
          <p>

          Entrega vía email en alta calidad
          </p>

          
       
        </p>
       
      </div>
      </div>
    </div>
    
     <div className="card">
     <div className="card-body">

     <img src={rash2} className="card-img" alt="..." />
     <div className="card-img-overlay">
       <h5 className="card-title tituloPaq">Corazón de melón</h5>
       <p className="card-text text-dark textoPaq position-absolute">
         <p>

         30 fotografias digitales
         </p>
         <p>
          fotografias de la mascota más laparticipacion de una persona
         </p>
         <p>

         Dos colores de fondo a eleccion
         </p>
         <p>

         Entrega vía email en alta calidad
         </p>

         
      
       </p>
      
     </div>
     </div>
   </div>
    </>

  );
};

export default Paquetes;
