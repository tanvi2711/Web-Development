import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted className="video-bg">
        <source src="/video-1280.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay" />
      <div className="content">
        <Navbar />
        <Hero />
        <FeatureCards />
      </div>
    </div>
  );
}

export default App;