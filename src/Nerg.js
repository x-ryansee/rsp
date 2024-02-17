import React, { useState } from 'react';
import './app.css';

const Nerg = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-front card-nerg">
          <h1 className="card-title" data-aos="fade-up" data-aos-anchor-placement="top-center">Nerg</h1>
          <h3 className="card-about">Lead Front-End Engineer</h3>
          <div className="h4-container"> {/* New div for H4 elements */}
            <h4>Lead Front-End Engineer for Mobile Application</h4>
            <h4>AI health wearables application, currently in development and set for future release.</h4>
            <h4>Utilizing Figma and UX principals to design intuitive and engaging user interfaces.</h4>
          </div>
        </div>
        <div className="card-back">
          <h3>Something for the back</h3>
        </div>
      </div>
    </div>
  );
};

export default Nerg;