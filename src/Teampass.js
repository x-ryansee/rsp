import React, { useState } from 'react';
import './app.css'; // Make sure you have an About.css file with the card styles

const Teampass = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-front card-teampass" >
      <h1 className="card-title" data-aos="fade-up" data-aos-anchor-placement="top-center">Teampass</h1>
      <h3 className="card-about">Front-End Developer</h3>
        {/* Additional content goes here */}
      </div>
      <div className="card-back">
          {/* Back content */}
          <h3>Details on the back...</h3>
        </div>
      </div>
    </div>
  );
};

export default Teampass;
