import React, { useState, useEffect, useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './navbar.css';

const sections = ["home", "Nerg", "Idylls", "CarbonHero", "TalesAI", "Teampass", "TourTracker"];

const Navbar = () => {
    const navbarRef = useRef(null);
    const [activeSection, setActiveSection] = useState('home');
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);

    // This effect updates the active section based on scroll position
    useEffect(() => {
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        return (
          element &&
          element.offsetTop <= window.scrollY &&
          element.offsetTop + element.clientHeight > window.scrollY
        );
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    }, [isDragging]); // Dependency on isDragging to re-evaluate when dragging stops

    const onDragStart = (e) => {
      setIsDragging(true);
      setDragStartX(e.pageX || e.touches[0].pageX);
    };
    
    const onDragMove = (e) => {
      if (!isDragging) return;
      const currentX = e.pageX || e.touches[0].pageX;
      const deltaX = currentX - dragStartX;
      // If the drag distance is significant, switch sections
      if (Math.abs(deltaX) > 100) {
        const direction = deltaX > 0 ? -1 : 1;
        const newIndex = sections.indexOf(activeSection) + direction;
        if (newIndex >= 0 && newIndex < sections.length) {
          scroll.scrollTo(window.innerHeight * newIndex); // Scroll to the new section
          setDragStartX(currentX); // Reset drag start position
        }
      }
    };
    
    const onDragEnd = () => {
      setIsDragging(false);
    };

    return (
      <div
        ref={navbarRef}
        className="navbar"
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onTouchStart={onDragStart}
        onTouchMove={onDragMove}
        onTouchEnd={onDragEnd}
      >
        <ul>
          {sections.map((section) => (
            <li key={section} className={activeSection === section ? 'active' : ''}>
              <Link
                activeClass="active"
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={() => setActiveSection(section)}
              >
                {activeSection === section ? section.charAt(0).toUpperCase() + section.slice(1) : ''}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Navbar;
