import React, { useState } from "react";
import { postUsuario } from "../helpers/fetchApp";
import login from "../css/login.css";
import iconoHokee from "../assets/iconoHokee.png"
const Registro = () => {
  const [formValues, setFormValues] = useState({
    nombre: "",
    email: "",
    password: "",
    role: "USER-ROLE",
  });

  const [message, setMessage] = useState([]);

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postUsuario(formValues).then((respuesta) => {
      console.log(respuesta);
      if (respuesta?.errors) {
        setMessage(respuesta.errors);
      } else {
        setMessage([{ ok: true, msg: "Registro exitoso!" }]);
        setFormValues({
          nombre: "",
          email: "",
          password: "",
          role: "USER-ROLE",
        });
        alert("usuario registrado")
        // try{

        //   setTimeout(() => {
        //     setMessage([]);
        //   }, 2000);
        // }
        // catch (err){
        //   console.log("usario no registrado")
        // }
        // console.log("Usuario registrado")
      }
    });
  };
  //se quiere lograr una funcion que compare las dos contraseñas (esto no funciona)- la conexion con la base de datos funciona perfectamemte.
  // function checkValidation(e) {
  //   setConfirmPassword(e.target.value);
  //   if (values.confirm_password === "" || String(values.password)) {
  //     console.log(values.confirm_password + "__" + values.password);
  //     error.confirm_password = "password no coincide";
  //   }
  //   return error;
  // }

  return (
    <div className="container registro login py-5 col-lg-12 col-md-6">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="colC-lg-12">
                  <div className="headC text-center text-white py-3">
                    <h3>
                      <img src={iconoHokee} alt="" className="logohokke" />
                      Registro
                    </h3>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="form py-3">
                <div className="form-row my-4">
                  <div className="col-lg-12">
                    <input
                      type="text"
                      name="nombre"
                      value={formValues.nombre}
                      onChange={handleChange}
                      className="effect-1  is-valid "
                      placeholder="Ingrese su nombre"
                      id="username"
                      required
                      pattern="[a-zA-Z0-9]+"
                      minlength="2"
                      maxlength="20"
                    />

                    <span className="Focus-border"></span>
                  </div>
                </div>

                <div className="form-row pb-4 ">
                  <div className="col-lg-12 ">
                    <input
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      className="effect-1 "
                      placeholder="Ingrese su correo electrónico"
                      pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                      maxlength="30"
                      required
                    />

                    <span className="Focus-border"></span>
                  </div>
                </div>
                <div className="form-row pt-2">
                  <div className="col-lg-12">
                    <input
                      type="password"
                      name="password"
                      value={formValues.password}
                      onChange={(e) => {
                        handleChange(e);
                        checkValidation(e);
                      }}
                      className="effect-1"
                      placeholder="Ingrese su contraseña"
                      required
                      maxlength="20"
                      role
                      minlength="6"
                    />
                    <span className="Focus-border"></span>
                  </div>
                </div>
                <div className="form-row pt-4">
                  <div className="col-lg-12">
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formValues.confirmPassword}
                      onChange={(e) => {
                        handleChange(e);
                        checkValidation(e);
                      }}
                      className="effect-1 "
                      placeholder="Repita su contraseña"
                      required
                      maxlength="20"
                      role
                      minlength="6"
                    />
                    <span className="Focus-border"></span>
                  </div>
                </div>

                <div className="form-row  pt-4">
                  <div className="col-lg-12">
                    <a href="" className="text">
                      <p>Volver</p>
                    </a>
                  </div>
                </div>
                <div className="offset-4 col-lg-12">
                  <input type="submit" value="Enviar" className="btn1" />
                </div>
              </form>
              {message.length > 0 &&
                message.map((item, index) => (
                  <div
                    className={
                      item?.ok
                        ? "alert alert-success mt-3"
                        : "alert alert-danger mt-3"
                    }
                    role="alert"
                    key={index}
                  >
                    {item.msg}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
