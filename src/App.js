import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Navigation from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Routes>
          <Route path='/' element= {<Home />}/>
          <Route path='/gallery' element={<Gallery />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
