import React from 'react';
import './app.css'; // Make sure you have an About.css file with the card styles

const About = () => {
  return (
    <div className="card-container">
      <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <h1 className="card-title" data-aos="fade-up" data-aos-anchor-placement="top-center">About</h1>
        {/* Additional content goes here */}
      </div>
    </div>
  );
};

export default About;
