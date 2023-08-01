import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesDos from "../src/routes/RoutesDos";
// import Login from "./pages/Login";
// import Registro from "./pages/Registro";
// import Gallery from "./pages/Gallery";
// import Paquetes from "./pages/Paquetes";
// import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesDos />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
{/* <Route path="/gallery" element={<Gallery />} />
  <Route path="/paquetes" element={<Paquetes />} /> */}
{/* <Route path="/login" element={<Login />} />
<Route path="/registro" element={<Registro />} /> */}
