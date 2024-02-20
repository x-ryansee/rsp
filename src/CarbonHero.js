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
        <div className="card-front card-carbon">
          <h5 className="card-stack">ReactJS / Mapping / Python</h5>
          <h1 className="card-title">CarbonHero</h1>
          <h3 className="card-about">Sole Developer and Founder</h3>
          <button className="card-button"> Private / Contact for Details </button>
          <h5 className="card-extra">Looking for Collaborators</h5>
          {/* Replace video with Vimeo embed */}
          <div >
          <iframe 
            src="https://player.vimeo.com/video/914923043?background=1" 
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
          <h4>App for tracking and reducing carbon footprints, with an emphasis on personalized tracking, goal-setting, and user engagement through rewards</h4>
          <h4>Leveraged React Native for cross-platform functionality, integrated AR for immersive experiences, and implemented customization for accurate emissions calculations</h4>
          <h4>Developed a unique rewards system to encourage sustainable behaviors, partnered with local businesses for tangible incentives, and utilized user feedback for ongoing app enhancement</h4>
        </div>
      </div>
    </div>
  );
};

export default CarbonHero;
