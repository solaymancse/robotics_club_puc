import './App.css';
import MainComponents from './MainComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
       <MainComponents/>
    </Router>
  );
}

export default App;
