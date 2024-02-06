import React, { useState, useEffect } from 'react';
import { Link, Element, Events, scrollSpy } from 'react-scroll';
import NavBar from './NavBar';
import HomePage from './HomePage';
import Portfolio from './Portfolio';
import Nerg from './Nerg';
import Idylls from './Idylls';
import CarbonHero from './CarbonHero';
import TalesAI from './TalesAI';
import Teampass from './Teampass';
import TourTracker from './TourTracker';
import './app.css';
import './homepage.css';
import './navbar.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const sections = ["home", "Portfolio", "Nerg", "Idylls", "CarbonHero", "TalesAI", "Teampass", "TourTracker"];

function App() {

  const [activeSection, setActiveSection] = useState('home');
  const [isZoomed, setIsZoomed] = useState(false);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  };
  
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

    if (currentIndex === 1 && !isZoomed) {
      setIsZoomed(true);
    } else if (currentIndex === 0 && isZoomed) {
      setIsZoomed(false);
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
      <Element name="home" className={isZoomed ? 'zoomed-home' : ''}>
        <HomePage />
      </Element>
      <Element name="Portfolio" className="section" onMouseOver={createRipple}>
        <Portfolio isZoomed={isZoomed} />
      </Element>
      <Element name="Nerg" className="section" onMouseOver={createRipple}>
        <Nerg />
      </Element>
      <Element name="Idylls" className="section" onMouseOver={createRipple}>
        <Idylls />
      </Element>
      <Element name="CarbonHero" className="section" onMouseOver={createRipple}>
        <CarbonHero />
      </Element>
      <Element name="TalesAI" className="section" onMouseOver={createRipple}>
        <TalesAI />
      </Element>
      <Element name="Teampass" className="section" onMouseOver={createRipple}>
        <Teampass />
      </Element>
      <Element name="TourTracker" className="section" onMouseOver={createRipple}>
        <TourTracker />
      </Element>
    </div>
  );
}

export default App;
