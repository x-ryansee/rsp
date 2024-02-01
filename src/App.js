import React from 'react';
import { Link, Element } from 'react-scroll';
import NavBar from './NavBar';
import HomePage from './HomePage';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import './app.css'
import './homepage.css'
import './navbar.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div className="App">
      <Element name="navbar">
        <NavBar />
      </Element>
      <Element name="home">
        <HomePage />
      </Element>
      <Element name="about" className="section">
        <About />
      </Element>
      <Element name="experiences" className="section">
        <Experiences />
      </Element>
      <Element name="projects" className="section">
        <Projects />
      </Element>
      <Element name="contact" className="section">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
