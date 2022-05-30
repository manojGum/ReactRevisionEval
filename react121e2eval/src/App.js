import { Link } from "react-router-dom";
import AllRoutes from "./Pages/AllRoutes";
import "./styles.css";

export default function App() {
  
  return (
    <div className="App">
    <div><Link to={"/register/one"}>register</Link></div>
      <AllRoutes/>
    </div>
  );
}


