import React from 'react';
import './app.css'; // Make sure you have an About.css file with the card styles

const TourTracker = () => {
  return (
    <div className="card-container">
      <div className="card card-tourtracker" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <h1 className="card-title" data-aos="fade-up" data-aos-anchor-placement="top-center">TourTracker</h1>
      <h3 className="card-about">About TourTracker</h3>
        {/* Additional content goes here */}
      </div>
    </div>
  );
};

export default TourTracker;
