import React from 'react';
import './app.css'; // Make sure you have an About.css file with the card styles

const CarbonHero = () => {
  return (
    <div className="card-container">
      <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-center">
        <h1 className="card-title" data-aos="fade-up" data-aos-anchor-placement="top-center">CarbonHero</h1>
        <h3 className="card-about">About CarbonHero</h3>
        <video width="100%" height="auto" controls autoPlay muted loop>
          <source src="/CarbonHeroFitness.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Additional content goes here */}
      </div>
    </div>
  );
};

export default CarbonHero;
