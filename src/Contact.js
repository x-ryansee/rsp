import React from 'react';
import './app.css'; // Make sure you have an Contact.css file with the card styles

const Contact = () => {
  return (
    <div className="card-container">
      <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <h1 className="card-title" data-aos="fade-up" data-aos-anchor-placement="top-center">Contact</h1>
        {/* Additional content goes here */}
      </div>
    </div>
  );
};

export default Contact;
