import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experiance from "./components/Experiance";
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Contect from './components/Contect';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    
    Aos.init();
  

  }, [])
  
  return (
    <>
    <Navbar />
    <div className="container">
    <Home />
    <Experiance />
    <Skills />
    <Projects />
    <Contect />
    </div>
    </>
  )
}

export default App;
