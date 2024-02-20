import React, { useState } from 'react';
import './app.css'; // Make sure you have an About.css file with the card styles

const TalesAI = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-front card-talesai" >
      <h1 className="card-title">TalesAI</h1>
      <h3 className="card-about">Sole Developer and Founder</h3>
        {/* Additional content goes here */}
      </div>
      <div className="card-back">
          {/* Back content */}
          <h3>Full Stack app using React Native, Python, and an AI model built with PyTorch for interactive storytelling.</h3>
          <h3>Created a user-friendly experience where users craft personalized stories and books through intuitive action selection. </h3>
          <h3>Conducted thorough testing and debugging to ensure app stability, performance, and compatibility with devices</h3>
        </div>
      </div>
    </div>
  );
};

export default TalesAI;
