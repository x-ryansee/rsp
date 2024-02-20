import React, { useState, useEffect } from 'react';
import { Element, Events, scrollSpy } from 'react-scroll';
import ScrollBar from './ScrollBar';
import HomePage from './HomePage';
import About from './About/About';
import Nerg from './Nerg';
import Idylls from './Idylls';
import CarbonHero from './CarbonHero';
import TalesAI from './TalesAI';
import Teampass from './Teampass';
import TourTracker from './TourTracker';
import More from './More';
import './app.css';
import './homepage.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const sections = ["home", "Nerg", "Idylls", "CarbonHero", "TourTracker", "ect"];

function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [hasEntered, setHasEntered] = useState(false);
  const [lastScrollDirection, setLastScrollDirection] = useState(null);
  

  // Adjusted smoothScrollTo function to take section name instead of y-coordinate
  const smoothScrollToSection = (sectionName) => {
    const sectionElement = document.querySelector(`[name="${sectionName}"]`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSectionChange = (newSection) => {
    setActiveSection(newSection);
    smoothScrollToSection(newSection); // Make sure to use the correct function here
  };

  // You can define these functions if needed or remove references if they're not used
  const handleDragStartFunction = () => {
    // Implement the function or remove if not needed
  };

  const handleDragEndFunction = () => {
    // Implement the function or remove if not needed
  };

  const handleScroll = (event) => {
    if (!hasEntered) {
      event.preventDefault(); // Prevent scrolling if the user hasn't "entered" yet
      return;
    }

    const direction = event.deltaY > 0 ? 'down' : 'up';
    if (direction !== lastScrollDirection) {
      setLastScrollDirection(direction);
      
      let currentIndex = sections.indexOf(activeSection);
      if (direction === 'down' && currentIndex < sections.length - 1) {
        currentIndex++;
      } else if (direction === 'up' && currentIndex > 0) {
        currentIndex--;
      }
      const nextSection = sections[currentIndex];
      if (nextSection) {
        setActiveSection(nextSection);
        smoothScrollToSection(nextSection); // Use the correct scrolling function
      }
    }
  };

  // Wrap handleScroll with debounce
  const debouncedHandleScroll = debounce(handleScroll, 100, false);

  useEffect(() => {
    if (hasEntered) {
      window.addEventListener('wheel', debouncedHandleScroll, { passive: false });
      return () => window.removeEventListener('wheel', debouncedHandleScroll);
    }
  }, [hasEntered, debouncedHandleScroll]);

  useEffect(() => {
    scrollSpy.update();
    Events.scrollEvent.register('begin', function(to, element) {
      setActiveSection(to);
    });
    return () => {
      Events.scrollEvent.remove('begin');
    };
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    
    // Delay the smooth scroll to ensure the Nerg section is fully mounted and its dimensions are updated
    setTimeout(() => {
      const nergSectionElement = document.querySelector('[name="Nerg"]');
      if (nergSectionElement) {
        const nergSectionY = nergSectionElement.offsetTop;
        smoothScrollToSection(nergSectionY);
      }
    }, 600); // This delay should be adjusted based on when you expect the elements to be fully rendered
  };

  return (
    <div className="App">
      <Element name="home">
        <HomePage onEnter={handleEnter} />
      </Element>
      {hasEntered && (
        <>
          <Element name="scrollbar">
          <ScrollBar
            sections={sections}
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
            onDragStart={handleDragStartFunction} // Ensure this is defined
            onDragEnd={handleDragEndFunction} // Ensure this is defined
          />
          </Element>
          <Element name="about">
            <About />
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
          <Element name="TourTracker" className="section">
            <TourTracker />
          </Element>
          <Element name="More">
            <More />
          </Element>
        </>
      )}
    </div>
  );
}

export default App;