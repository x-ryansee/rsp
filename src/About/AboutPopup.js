import React from 'react';
import './aboutpopup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const AboutPopup = ({ isOpen, closePopup }) => {
  if (!isOpen) return null;

  return (
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
      <button className="close-button" onClick={closePopup}>
        Close
      </button>
    </div>
  );
};

export default AboutPopup;
