import React, { useState, useEffect } from 'react';
import { Link, Element, Events, scrollSpy } from 'react-scroll';
import NavBar from './NavBar';
import HomePage from './HomePage';
import Nerg from './Nerg';
import Idylls from './Idylls';
import CarbonHero from './CarbonHero';
import TalesAI from './TalesAI';
import Teampass from './Teampass';
import TourTracker from './TourTracker';
import About from './About/About';
import AboutPopup from './About/AboutPopup';
import './app.css';
import './homepage.css';
import './navbar.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const sections = ["home", "Nerg", "Idylls", "CarbonHero", "TalesAI", "Teampass", "TourTracker"];

function App() {

  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (event) => {
    event.preventDefault(); // Prevent the default scroll behavior
  
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const deltaY = event.deltaY;
  
    // Determine the direction of the scroll
    const direction = deltaY > 0 ? "down" : "up";
  
    // Calculate the current section index based on scrollY and windowHeight
    let currentIndex = Math.round(scrollY / windowHeight);
  
    // Adjust the index based on the direction
    if (direction === "down" && currentIndex < sections.length - 1) {
      currentIndex += 1;
    } else if (direction === "up" && currentIndex > 0) {
      currentIndex -= 1;
    }
  
    // Calculate the newY position to scroll to
    const newY = currentIndex * windowHeight;
  
    // Use window.scrollTo for a smooth transition to the new section
    window.scrollTo({
      top: newY,
      behavior: 'smooth'
    });
  
    // Update the active section state
    setActiveSection(sections[currentIndex]);
  };
  
  // Don't forget to adjust your useEffect hook to use the updated handleScroll
  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
  
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]); // Add handleScroll to the dependency array to re-bind the event listener if the function changes
  

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
      <Element name="Teampass" className="section">
        <Teampass />
      </Element>
      <Element name="TourTracker" className="section">
        <TourTracker />
      </Element>
    </div>
  );
}

export default App;
