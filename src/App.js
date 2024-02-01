import React, { useState, useEffect } from 'react';
import { Link, Element, Events, scrollSpy } from 'react-scroll';
import NavBar from './NavBar';
import HomePage from './HomePage';
import Nerg from './Nerg';
import Idylls from './Idylls';
import CarbonHero from './CarbonHero';
import TalesAI from './TalesAI';
import Blinkcore from './Blinkcore';
import TourTracker from './TourTracker';
import About from './About/About';
import AboutPopup from './About/AboutPopup';
import './app.css';
import './homepage.css';
import './navbar.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const sections = ["home", "Nerg", "Idylls", "CarbonHero", "TalesAI", "Blinkcore", "TourTracker"];

function App() {
  const [showAboutPopup, setShowAboutPopup] = useState(false);

  const openAboutPopup = () => {
    setShowAboutPopup(true);
  };

  const closeAboutPopup = () => {
    setShowAboutPopup(false);
  };

  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (event) => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const deltaY = event.deltaY;

    // Calculate the current section index
    const currentIndex = sections.indexOf(activeSection);

    // Determine the new section index based on scroll direction
    let newIndex = currentIndex;
    if (deltaY > 0) {
      // Scrolling down
      if (currentIndex < sections.length - 1) {
        newIndex = currentIndex + 1;
      }
    } else if (deltaY < 0) {
      // Scrolling up
      if (currentIndex > 0) {
        newIndex = currentIndex - 1;
      }
    }

    // Update the active section
    if (newIndex !== currentIndex) {
      setActiveSection(sections[newIndex]);
      event.preventDefault(); // Prevent default scroll behavior
    }
  };

  useEffect(() => {
    // Register scroll event listener for the whole document
    window.addEventListener('wheel', handleScroll, { passive: false });

    // Unregister scroll event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    // Initialize scrollSpy
    scrollSpy.update();

    // Setup scroll event for scrollSpy
    Events.scrollEvent.register('begin', function (to, element) {
      setActiveSection(to);
    });

    // Clean up scroll event
    return () => {
      Events.scrollEvent.remove('begin');
    };
  }, []);

  return (
    <div className="App">
      <Element name="navbar">
        <NavBar activeSection={activeSection} />
      </Element>
      <Element name="home">
        <HomePage />
      </Element>
      <Element name="Nerg" className="section">
        <Nerg />
      </Element>
      <Element name="Idylls" className="section">
        <Idylls />
      </Element>
      <Element name="CarbonHero" className="section">
        <CarbonHero />
      </Element>
      <Element name="TalesAI" className="section">
        <TalesAI />
      </Element>
      <Element name="Blinkcore" className="section">
        <Blinkcore />
      </Element>
      <Element name="TourTracker" className="section">
        <TourTracker />
      </Element>
      {showAboutPopup && (
        <div className="about-sticky">
          <About />
        </div>
      )}
      <button className="about-button" onClick={openAboutPopup}>
        About
      </button>
      {/* Render the AboutPopup component */}
      <AboutPopup isOpen={showAboutPopup} closePopup={closeAboutPopup} />
    </div>
  );
}

export default App;
