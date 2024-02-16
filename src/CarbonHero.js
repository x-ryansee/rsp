import React, { useState } from 'react';
import './app.css'; // Assuming this CSS file contains your styles

const CarbonHero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-front">
        <h1 className="card-title" data-aos="fade-up" data-aos-anchor-placement="top-center">CarbonHero</h1>
        <h3 className="card-about">Sole Developer and Founder</h3>
        <video width="100%" height="auto" controls autoPlay muted loop>
          <source src="/CarbonHeroFitness.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Additional content goes here */}
      </div>
      <div className="card-back">
          {/* Back content */}
          <h3>App for tracking and reducing carbon footprints, with an emphasis on personalized tracking, goal-setting, and user engagement through rewards</h3>
          <h3>Leveraged React Native for cross-platform functionality, integrated AR for immersive experiences, and implemented customization for accurate emissions calculations</h3>
          <h3>Developed a unique rewards system to encourage sustainable behaviors, partnered with local businesses for tangible incentives, and utilized user feedback for ongoing app enhancement</h3>
        </div>
      </div>
    </div>
  );
};

export default CarbonHero;
