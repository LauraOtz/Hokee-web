import React from "react";
import slider5 from "../assets/slider5.jpg";
import presentacion from "../css/presentacion.css";

const Presentacion = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Conoceme</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            explicabo? Repellat minima consequuntur amet, accusantium qui
            praesentium! Alias obcaecati delectus, recusandae, perferendis culpa
            repellat quibusdam officiis, voluptas neque quas veniam illum iure
            nam! Ullam sequi odio recusandae eum nostrum fugiat expedita,
            necessitatibus, quod numquam doloremque minus, maxime provident
            veniam repellat?
          </p>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            explicabo? Repellat minima consequuntur amet, accusantium qui
            praesentium! Alias obcaecati delectus, recusandae, perferendis culpa
            repellat quibusdam officiis, voluptas neque quas veniam illum iure
            nam! Ullam sequi odio recusandae eum nostrum fugiat expedita,
            necessitatibus, quod numquam doloremque minus, maxime provident
            veniam repellat?
          </p>
          <p className="card-text">
            <small className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              dolore magni omnis ad odio quo neque error illum nulla aperiam.
            </small>
          </p>
        </div>
        <img src={slider5} className="card-img-bottom imgcard" alt="..." />
      </div>
    </>
  );
};

export default Presentacion;
