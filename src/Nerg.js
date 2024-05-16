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
          <h5 className="card-stack">React Native / Figma / Expo</h5>
          <h1 className="card-title">Nerg</h1>
          <h3 className="card-about">Lead Front-End Engineer</h3>
          <button className="card-button" onClick={() => window.open('https://www.nerg.one/', '_blank', 'noopener,noreferrer')}> Website</button>
          <h5 className="card-extra">App in Development</h5>
        </div>
        <div className="card-back h4-container">
          <h4>Lead Front-End Engineer for Mobile Application</h4>
          <h4>AI health wearables application, currently in development and set for future release.</h4>
          <h4>Utilizing Figma and UX principals to design intuitive and engaging user interfaces.</h4>
        </div>
      </div>
    </div>
  );
};

export default Nerg;

// Add Web page