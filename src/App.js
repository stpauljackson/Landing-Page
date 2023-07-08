import './App.css';

import {BrowserRouter as Router , Route, Routes } from 'react-router-dom';

import Home from './components/home';
import Services from './components/services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App" >
      
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
