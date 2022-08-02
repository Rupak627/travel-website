import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './Components/pages/Home';
import Products from './Components/pages/Products';
import Services from './Components/pages/Services';
import SignUp from './Components/pages/Signup';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path='/signup' element ={ <SignUp />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
