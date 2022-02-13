import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { PreLoader } from './components/PreLoader/PreLoader';

function App() {
  return (
    <Router>
      <PreLoader/>
      
    </Router>
  );
}

export default App;
