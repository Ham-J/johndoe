import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";

import 'bootstrap-icons/font/bootstrap-icons.css';
import Porfolio from './pages/Portfolio'
import Contact from './pages/Contact';
import Home from './pages/Home';
import Mentions from './pages/Mentions'
import Services from './pages/Services';


const App = () => {
  return(
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Porfolio />} />
          <Route path="/mentions" element={<Mentions />} />
         
        </Routes>
     
    </BrowserRouter>

    
  )
}
export default App;