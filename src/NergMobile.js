import React, { useState } from 'react';
import './app.css'; // Assuming this CSS file contains your styles

const NergMobile = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="card-front card-carbon">
          <h5 className="card-stack">React Native / Expo / Figma</h5>
          <h1 className="card-title">Nerg Mobile App</h1>
          <h3 className="card-about">Sole Developer and Founder</h3>
          <h5 className="card-extra">Set for Future Release</h5>
          <div >
          <iframe 
            src="https://player.vimeo.com/video/956680039?background=1" 
            style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen>
          </iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
        <div className="card-back h4-container">
          {/* Back content */}
          <h4>Lead Front-End Engineer for Mobile Application</h4>
          <h4>AI health wearables application, currently in development and set for future release.</h4>
          <h4>Utilizing Figma and UX principals to design intuitive and engaging user interfaces.</h4>
        </div>
      </div>
    </div>
  );
};

export default NergMobile;
