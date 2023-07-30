import "./App.css";
import {  Routes, Route } from "react-router-dom";
import RoutesDos from "../src/routes/RoutesDos";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Gallery from "./pages/Gallery";
import Paquetes from "./pages/Paquetes";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
  
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <RoutesDos />
            </ProtectedRoutes>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/paquetes" element={<Paquetes />} />
      </Routes>
  
  );
}

export default App;
