import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { PreLoader } from './components/PreLoader/PreLoader';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <PreLoader/>
      
    </Router>
  );
}

export default App;
