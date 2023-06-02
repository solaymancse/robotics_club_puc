import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PreLoader } from "./components/PreLoader/PreLoader";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { MainPanel } from "./components/Dashboard/MainPanel";

function App() {
  return (
    <div className="App">
      <PreLoader />
      
    </div>
  );
}

export default App;
