import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import NavBar from './layouts/NavBar/NavBar';
import Proj1 from './pages/Portfolio/Projects/Proj1';
import Proj2 from './pages/Portfolio/Projects/Proj2';
import Proj4 from './pages/Portfolio/Projects/Proj4';
import Proj3 from './pages/Portfolio/Projects/Proj3';

function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/contacto' element={<Contact/>}></Route>
          <Route path='/navbar' element={<NavBar/>}></Route>
          <Route path='/project1' element={<Proj1/>}></Route>
          <Route path='/project2' element={<Proj2/>}></Route>
          <Route path='/project3' element={<Proj3/>}></Route>
          <Route path='/project4' element={<Proj4/>}></Route>
        </Routes>
      </Router>
      </>
    </div>
  );
}

export default App;
