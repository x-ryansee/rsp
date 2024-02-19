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

  const smoothScrollTo = (y) => {
    let startY = window.scrollY;
    let targetY = y;
    let distance = targetY - startY;
    let startTime = null;

    function scrollStep(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = timestamp - startTime;
      let fraction = Math.min(progress / 300, 1); // Duration of 300ms

      window.scrollTo(0, startY + distance * fraction);

      if (fraction < 1) {
        window.requestAnimationFrame(scrollStep);
      }
    }

    window.requestAnimationFrame(scrollStep);
  };

  const handleScroll = (event) => {
    if (!hasEntered) {
      event.preventDefault(); // Prevent scrolling if the user hasn't "entered" yet
      return;
    }

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

    // Use smoothScrollTo for a smooth transition to the new section
    smoothScrollTo(newY);

    // Update the active section state
    setActiveSection(sections[currentIndex]);
  };

  const debouncedHandleScroll = debounce(handleScroll, 100, false);

  useEffect(() => {
    window.addEventListener('wheel', debouncedHandleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);

  useEffect(() => {
    // Initialize scrollSpy
    scrollSpy.update();

    // Setup scroll event for scrollSpy
    Events.scrollEvent.register('begin', function(to, element) {
      setActiveSection(to);
    });

    // Clean up scroll event
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
        smoothScrollTo(nergSectionY);
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
            <ScrollBar sections={sections} activeSection={activeSection} />
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