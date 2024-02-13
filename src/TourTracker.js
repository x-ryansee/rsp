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
          <h1 className="card-title" data-aos="fade-up" data-aos-anchor-placement="top-center">TourTracker</h1>
          <h3 className="card-about">Sole Developer and Founder</h3>
        </div>
        <div className="card-back">
          {/* Back content */}
          <h3>Details on the back...</h3>
        </div>
      </div>
    </div>
  );
};

export default TourTracker;
