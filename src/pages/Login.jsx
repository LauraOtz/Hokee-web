import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { postAuth} from "../helpers/fetchApp";
import login from "../css/login.css";
import hokeelog from "../assets/hokeelog.jpg"

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const validarDatos = () => {
    const datos = {
      email,
      password,
    };
    postAuth(datos).then((respuesta) => {
      console.log(respuesta);
      if (respuesta?.token) {
        setMessage({ ok: true, msg: "Login ok" });
        localStorage.setItem("token", JSON.stringify(respuesta.token));
        navigate("/");
      } else {
        setMessage(respuesta);
      }
    });
  };
  return (
    <div className="login registro container py-5 col-lg-12 col-md-6">
      <div className="row">
        <div className="  ">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="colC col-lg-12">
                  <div className="headC text-center text-white py-3">
                    <h3>
                    <img src={hokeelog} alt="" className="logohokke" />
                      Iniciar sesión</h3>
                  </div>
                </div>
              </div>

              <div className="form py-3">
                <div className="form-row pb-4 ">
                  <div className="col-lg-12 ">
                    <input
                      //type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      //name="user_email"
                      className="effect-1 "
                      placeholder="Ingrese su correo electrónico"
                      //pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                      maxlength="30"
                      required
                    />

                    <span className="Focus-border"></span>
                  </div>
                </div>
                <div className="form-row pt-2">
                  <div className="col-lg-12">
                    <input
                      //type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      //name="message"
                      className="effect-1 "
                      placeholder="Ingrese su contraseña"
                      required
                      maxlength="20"
                      role
                      minlength="6"
                    />
                    <span className="Focus-border"></span>;
                  </div>
                </div>
                <div className="form-row pt-4 ">
                  <div className="col-lg-12">
                    <a href="" className="text">
                      <p>Registre su usuario aquí</p>
                    </a>
                  </div>
                </div>
                <div className="form-row  ">
                  <div className="col-lg-12">
                    <a href="" className="text">
                      <p>¿Olvidó su contraseña?</p>
                    </a>
                  </div>
                </div>
                <div className=" col-lg-12">
                <button className=" btn1 btn-lg" onClick={validarDatos}>
                Iniciar Sesion
              </button>
                  
                </div>
              </div>
              {message && (
            <div
              className={
                message?.ok
                  ? "alert alert-success mt-3"
                  : "alert alert-danger mt-3"
              }
              role="alert"
            >
              {message.msg}
            </div>
          )}
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
