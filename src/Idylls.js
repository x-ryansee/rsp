import React, { useState } from 'react';
import './app.css'; // Assuming this CSS file contains your styles

const Idylls = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-front card-idylls">
          <h5 className="card-stack">React / Ruby on Rails</h5>
          <h1 className="card-title">Idylls</h1>
          <h3 className="card-about">Sole Developer and Founder</h3>
          <div className="card-buttons-container">
            <button className="card-button">Website</button>
            <button className="card-button">Demo</button>
          </div>
          {/* Replace video with Vimeo embed */}
          <div>
          <iframe 
            src="https://player.vimeo.com/video/914923347?background=1" 
            style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen>
          </iframe>
          </div>
        </div>
        <div className="card-back h4-container">
          {/* Back content */}
          <h4>Engineered a full-stack application for property reservations, utilizing ReactJS and Ruby on Rails</h4>
          <h4>CRUD functionality built with React, React Router implemented for page navigation.</h4>
          <h4>Used Rails and BCrypt to manage user authentication, and sessions data to track users once logged in.</h4>
        </div>
      </div>
    </div>
  );
};

export default Idylls;