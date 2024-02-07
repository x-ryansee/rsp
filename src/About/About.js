import React, { useState } from 'react';
import './about.css'; // Styles for the About section
import './aboutpopup.css'; // Styles for the About Popup
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
      <button className="about-button" onClick={togglePopup}>About Me</button>

      {isOpen && (
        <div className="about-popup">
          <div className="card">
            <h1 className="card-title" data-aos="fade-left" data-aos-anchor-placement="top-center">About</h1>
            <div className="card-content" data-aos="fade-right" data-aos-anchor-placement="top-center">
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
          <button className="close-button" onClick={togglePopup}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default About;
