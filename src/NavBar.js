import React, { useState, useEffect } from 'react';
import { Link, Events } from 'react-scroll';
import './navbar.css';

const sections = ["home", "Nerg", "Idylls", "CarbonHero", "TalesAI", "Teampass", "TourTracker"];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isHovering, setIsHovering] = useState(false);
  
    // Setup scroll event
    Events.scrollEvent.register('begin', function (to, element) {
      setActiveSection(to);
    });

    // Clean up scroll event
    React.useEffect(() => {
      return () => {
        Events.scrollEvent.remove('begin');
      };
    }, []);

  return (
    <div className="navbar" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <ul>
        {sections.map((section) => (
          <li key={section} className={activeSection === section ? 'active' : ''}>
            <Link
              activeClass="active"
              to={section}
              spy={true}
              smooth={true}
              onSetActive={() => setActiveSection(section)}
            >
              {isHovering || activeSection === section ? section.charAt(0).toUpperCase() + section.slice(1) : ''}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
