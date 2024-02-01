import React from 'react';
import { Link, Element } from 'react-scroll';
import HomePage from './HomePage';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="home" smooth={true}>Home</Link>
        <Link to="about" smooth={true}>About</Link>
        <Link to="experiences" smooth={true}>Experiences</Link>
        <Link to="projects" smooth={true}>Projects</Link>
        <Link to="contact" smooth={true}>Contact</Link>
      </nav>
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
