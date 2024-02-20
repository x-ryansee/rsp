import React, { useState } from 'react';
import './app.css'; // Assuming your CSS file is named app.css

const TourTracker = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-front card-tourtracker" >
          {/* Front content */}
          <h5 className="card-stack">React Native / Python / Spotify</h5>
          <h1 className="card-title" data-aos="fade-up" data-aos-anchor-placement="top-center">TourTracker</h1>
          <h3 className="card-about">Sole Developer and Founder</h3>
          <button className="card-button" onClick={() => window.open('https://github.com', '_blank', 'noopener,noreferrer')}>
            Code
          </button>
        </div>
        <div className="card-back h4-container">
          {/* Back content */}
          <h4>React Native + Django application using Spotify API for personalized concert discovery based on user's history.</h4>
          <h4>Implementing a Django to manage API endpoints, user authentication, and live event data retrieval, ensuring scalable and secure user interactions</h4>
          <h4>Employing Agile methodologies and version control with Git for iterative development, feature integration, and collaboration across front-end and back-end development stages</h4>
        </div>
      </div>
    </div>
  );
};

export default TourTracker;
