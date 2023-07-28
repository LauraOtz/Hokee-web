import React from "react";
import cuca404 from "../assets/cuca404.jpg";
import notFound from "../css/notFound.css";


const NotFound = () => {
  return (
    <div className="notF fixed-top">
      <img src={cuca404} className="card-img " alt="..." />
      <div className="card-img-overlay ">
        <div class="container text-white   ">
          <div class="row justify-content-center pb-2">
            <div className="col-6 ">
              <h2 className=" text-white text4 pt-3">Oops</h2>
              <p className="  text-white pt-3 text404 ">
                Cuca dice que te has perdido
              </p>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-light btn-card  mt-3 btn-parall btn404"
          >
            <a className=" text-center" href="/">
              <b>Volver al inicio</b>{" "}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
