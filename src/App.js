import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { GridLoader } from "react-spinners";
import { HomePage } from "./pages/HomePage";
import { useEffect } from "react";

function App() {
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {!done ? <div style={{textAlign:'center',display:'flex',marginTop:'25%',marginLeft:'50%'}}>
        <GridLoader color="#36d7b7" />
      </div> : <HomePage />}
      
    </div>
  );
}

export default App;
