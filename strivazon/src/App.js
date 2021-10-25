import logo from './logo.svg';
import './App.css';
import MyNavBar from './components/MyNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyHome from './components/MyHome';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <MyNavBar />
      <MyHome />
      </Router>
    </div>
  );
}

export default App;
