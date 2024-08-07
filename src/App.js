import React, { useState, useEffect } from 'react';
import { Element, Events, scrollSpy } from 'react-scroll';
import ScrollBar from './ScrollBar';
import HomePage from './HomePage';
import About from './About/About';
import NergMobile from './NergMobile';
import Nerg from './Nerg';
import Idylls from './Idylls';
import CarbonHero from './CarbonHero';
import TourTracker from './TourTracker';
import './app.css';
import './homepage.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const sections = ["home", "Nerg Mobile", "Nerg", "Idylls", "CarbonHero", "TourTracker"];

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
  const [isTransitionLocked, setIsTransitionLocked] = useState(false);


    // Define the function to handle section change
    const handleSectionChange = (newSection) => {
      setActiveSection(newSection);
    };
  
    // Define the function to be called when dragging starts
    const handleDragStartFunction = () => {
      // Implement any action needed when dragging starts
    };
  
    // Define the function to be called when dragging ends
    const handleDragEndFunction = () => {
      // Implement any action needed when dragging ends
    };
  
  

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
      event.preventDefault();
      return;
    }
  
    // Early return if a transition is already in progress
    if (isTransitionLocked) {
      event.preventDefault();
      return;
    }
  
    const deltaY = event.deltaY;
    const direction = deltaY > 0 ? "down" : "up";
    let currentIndex = sections.findIndex(section => section === activeSection);
  
    // Determine the target section based on the scroll direction
    if (direction === "down") {
      if (currentIndex < sections.length - 1) {
        currentIndex++;
      } else {
        // Already at the last section, no further action needed
        return;
      }
    } else if (direction === "up") {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        // Already at the first section, no further action needed
        return;
      }
    }
  
    setIsTransitionLocked(true); // Prevent further scrolls during transition
  
    // Calculate the target position for scrolling
    const targetY = currentIndex * window.innerHeight;
    smoothScrollTo(targetY);
  
    // Update the active section state
    setActiveSection(sections[currentIndex]);
  
    // Ensure the transition lock is released after a delay
    setTimeout(() => {
      setIsTransitionLocked(false);
    }, 800);
  };
  

  const debouncedHandleScroll = debounce(handleScroll, 100, false);
  
  useEffect(() => {
    if (hasEntered) {
      window.addEventListener('wheel', debouncedHandleScroll, { passive: false });
  
      return () => {
        window.removeEventListener('wheel', debouncedHandleScroll);
      };
    }
  }, [hasEntered, debouncedHandleScroll]);

  useEffect(() => {
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
      const nergSectionElement = document.querySelector('[name="Nerg Mobile"]');
      if (nergSectionElement) {
        const nergSectionY = nergSectionElement.offsetTop;
        smoothScrollTo(nergSectionY);
      }
    }, 600); // This delay should be adjusted based on when you expect the elements to be fully rendered
  };

  return (
        <div className="App">
          <Element name="home" >
            <HomePage onEnter={handleEnter} />
          </Element>
          {hasEntered && (
            <>
              <Element name="scrollbar">
              <ScrollBar
                sections={sections}
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
                onDragStart={handleDragStartFunction}
                onDragEnd={handleDragEndFunction}
              />
              </Element>
              <Element name="about">
                <About />
              </Element>
              <Element name="NergMobile" className="section">
                <NergMobile />
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
            </>
          )}
        </div>
  );
}

export default App;