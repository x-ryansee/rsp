// Portfolio.js
import React from 'react';
import './portfolio.css'; // Make sure to create this CSS file

const Portfolio = ({ isZoomed }) => {
  return (
    <div className={`portfolio ${isZoomed ? 'zoomed' : ''}`}>
      <img src={""} alt="Homepage Snapshot" />
    </div>
  );
};

export default Portfolio;
