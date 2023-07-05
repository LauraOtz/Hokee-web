import "./App.css";
import {BrowserRouter} from "react-router-dom";
import RoutesDos from "./routes/RoutesDos";
// import RoutesDos from "../src/routes/RoutesDos";


function App() {
  return (
    <BrowserRouter>
    
    <RoutesDos/>
      {/* <Routes>
        <Route path="*" element={<RoutesDos />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
