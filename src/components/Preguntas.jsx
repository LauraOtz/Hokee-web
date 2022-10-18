import React from "react";
import olaf from "../assets/olaf.jpg";
import preguntas from "../css/preguntas.css";

const Preguntas = () => {
  return (
    <>
      <div className="card cardPr">
        <div className="card-body">
          <h1 className="">¿Cómo trabajo?</h1>
          <img src={olaf} className="card-img-bottom imgcardP" alt="..." />
          <p className="card-text">
          
<p className="text-dark">

¿Se puede elegir otra opción de entrega? 
</p>
<p>

todo el trabajo es personalizable, consulte según su preferencia o una temática especial.
Cuánto dura la sesión? alrrededor de una hora, todo depende de la mascota y del paquete que hayas contratado.
</p>
<p className="text-dark">
  
¿Es solo para perros?
</p>
<p>

 no, todas las mascotas pueden ser retratadas,el único requisito es que sean amigables.
</p>
<p className="text-dark">
  
¿Qué tengo que llevar?
</p>
<p>

 todas las sesiones incluyen accesorios, moños, anteojos, collares (excepto ropa), si tenes tus accesorios o ropita preferida podes traer lo que mas te guste.
Dónde se realiza? la sesión de fotos es en estudio de fotos.(zona Av. Mitre y San Martin) (consultar por fotos en exterior) 
</p>
<p className="text-dark">

¿Cuánto demoras en entregarme el trabajo? 
</p>
<p>

alrrededor de una semana.
</p>
<p className="text-dark">

¿Quién tiene que llevar a la mascota? 
</p>
<p>

la mascota será acompañada sólo por una persona, sin excepción, y que sea aquella con la que más se sienta cómoda y tenga mas confianza. No puede traerla una persona agena a la mascota.
</p>
<p className="text-dark">

¿Se pueden personalizar las sesiones? 
</p>
<p>

sí, podemos armar una temática (cumpleaños, regalo sorpresa,o la idea que tengas!)
</p>
<p className="text-dark">

Mi mascota es inquieta y no le gustan las fotos, ¿se puede? 
</p>
<p>

Sí!, te vas a sorprender con los resultados y sus expresiones!
</p>
<p className="text-dark">
  
¿Cómo puedo pagar? 
</p>
<p>

se requiere una seña del 50% para reservar día y hora, y el resto se entrega el mismo día de la sesión en su totalidad. La forma de pago por ahora es en efectivo.
</p>
<p className="text-dark"> 

¿Qué otra pregunta se te ocurre?
</p>

          <div>
              <button className="btn btnPreguntas">
                <h3>Consultame!</h3>
              </button>
            </div>
          </p>
         
        
        </div>
       
      </div>
    </>
  );
};

export default Preguntas;



