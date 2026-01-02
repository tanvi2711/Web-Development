import React from 'react';
import './FeatureCards.css';

import wildlifeIcon from './wildlife.png';
import deforestationIcon from './deforestration.png';
import predictiveIcon from './predictive.png';

const features = [
  {
    icon: wildlifeIcon,
    title: 'Wildlife Tracking',
    description: 'Monitor real-time movements of wildlife',
  },
  {
    icon: deforestationIcon,
    title: 'Deforestation',
    description: 'Detect and track forest loss instantly',
  },
  {
    icon: predictiveIcon,
    title: 'Predictive Analysis',
    description: 'Forecast deforestation trends and risks',
  },
];

const FeatureCards = () => {
  return (
    <div className="features">
      <div className="cards">
        {features.map((feat, index) => (
          <div key={index} className="feature-card">
            <img src={feat.icon} alt={feat.title} className="icon-img" />
            <h3>{feat.title}</h3>
            <p>{feat.description}</p>
          </div>
        ))}
      </div>
      <button className="learn-more">Learn More</button>
    </div>
  );
};

export default FeatureCards;
