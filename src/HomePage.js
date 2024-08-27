import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="page-title">Battle Subscribers: CR7 vs Mr. Beast with AR Technology</h1>

      <div className="versus-section">
        <div className="player player-left">
          <img src="images/cr777.png" alt="CR7" className="player-image" />
          <div className="player-name">UR · Cristiano</div>
        </div>
        <div className="vs">
          <span className="vs-text">VS</span>
        </div>
        <div className="player player-right">
          <img src="images/mrb.png" alt="Mr. Beast" className="player-image" />
          <div className="player-name">MR.BEAST</div>
        </div>
      </div>

      <Link to="/ar" className="start-ar-button">START AR</Link>

      <p className="creator">
        Created by Yudistira Putra | 
        <a href="https://github.com/Yudis-bit" target="_blank" rel="noopener noreferrer" className="github-link"> GitHub</a>
      </p>
    </div>
  );
};

export default HomePage;
