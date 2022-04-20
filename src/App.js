import './App.css';
import Nav from './layaouts/Nav'
import Home from './layaouts/Home'
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/help" element={<div>id</div>} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
