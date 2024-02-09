import React, { useState } from 'react';
import './about.css'; // Ensure this file contains your styles for the about section and button
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const About = () => {
  // State to control the visibility of the popup
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the popup's visibility
  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div className="about-section">
      {/* Conditional rendering for button text and functionality */}
      <button className="about-button" onClick={togglePopup}>
        {isOpen ? 'Close' : 'About Me'}
      </button>

      {isOpen && (
        <div className="about-popup">
          <div className="card">
            <h1 className="card-title">About</h1>
            <div className="card-content">
              <p><strong>Location:</strong> Los Angeles-based Developer</p>
              <p><strong>Education:</strong> Degree from Cal Poly - SLO, refined skills from Flatiron School, Google UX certified</p>
              <p><strong>Currently:</strong> Leading front-end mobile development at NERG</p>
              <div className="contact-icons">
                <a href="https://www.linkedin.com/in/ryansee/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/x-ryansee" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="mailto:ryanjosephsee@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
          {/* Removed the standalone Close button inside the popup since it's now integrated with the About Me button */}
        </div>
      )}
    </div>
  );
};

export default About;
