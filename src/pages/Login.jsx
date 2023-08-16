import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { postAuth } from "../helpers/fetchApp";
import login from "../css/login.css";
import iconoHokee from "../assets/iconoHokee.png";

const Login = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

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
// ----------------------------------------------------
function modificarNav() {
  if (logUser) {
    let listContainer = document.getElementById("listaMenu");
    //reemplazar
    let login = document.getElementById("loginNav");
    let registro = document.getElementById("regNav");
    login.style.display = "none";
    registro.style.display = "none";
    // Opciones de Usuario
    let btnUser = document.createElement("li");
    btnUser.classList = "nav-item";
    let optionUser = `<a class="nav-link botones active" href="#" data-bs-toggle="modal" data-bs-target="#cerrarSesion">Hello ${logUser.nombre} ${logUser.apellido}</a>`;
    btnUser.innerHTML = optionUser;
    listContainer.appendChild(btnUser);

    // if(logUser){
    if (logUser.rol === "admin") {
      let btnAdmin = document.createElement("li");
      btnAdmin.classList = "nav-item";
      let opcionAdmin=""
      if(window.location.pathname.split("/").pop()=='index.html'){
        opcionAdmin = `<a class="nav-link botones active"
       href="./pages/admin.html">Admin</a>`;
      }else{
        opcionAdmin = `<a class="nav-link botones active"
       href="../pages/admin.html">Admin</a>`;
      }
      
      btnAdmin.innerHTML = opcionAdmin;
      listContainer.appendChild(btnAdmin);
    }
    // }
  }
}



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
                      <img src={iconoHokee} alt="" className="logohokke" />
                      Iniciar sesión
                    </h3>
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
                      placeholder="Correo electrónico"
                      //pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                      maxLength="30"
                      required
                    />

                    <span className="Focus-border"></span>
                  </div>
                </div>
                <div className="container" onClick={() => setVisible(!visible)}>
                  <div className="row">
                    <div className="col ">
                      <input
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={visible ? "text" : "password"}
                        className="effect-1"
                        placeholder="Contraseña"
                        required
                        maxLength="20"
                        minLength="6"
                      />
                    </div>
                    <div className=" col col-1 iconPass">
                      {visible ? (
                        <i className="fa fa-eye fa-2x" aria-hidden="true"></i>
                      ) : (
                        <i className="fa fa-lock fa-2x" aria-hidden="true"></i>
                      )}
                    </div>
                  </div>
                  <span className="Focus-border"></span>
                </div>
                <div className="form-row pt-4 ">
                  <div className="col-lg-12">
                    <NavLink to="/registro" className="text text-dark">
                      <p>Registre su usuario aquí</p>
                    </NavLink>
                  </div>
                </div>
                <div className="form-row ">
                  <div className="col-lg-12">
                    <NavLink to="/" className="text text-dark">
                      <p>Volver al inicio</p>
                    </NavLink>
                  </div>
                </div>
                {/* funcionalidad a relizar */}
                {/* <div className="form-row text-dark ">
                  <div className="col-lg-12">
                    <a href="" className="text text-dark">
                      <p>¿Olvidó su contraseña?</p>
                    </a>
                  </div>
                </div> */}
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
