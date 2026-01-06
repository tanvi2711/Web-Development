import React from 'react';
import './Navbar.css';

import eclogo from './ecologo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={eclogo} alt="ECOGUARD Logo" className="logo-img" />
        <div className="logo">ECOGUARD</div>
      </div>
      <ul className="nav-links">
        <li>Wildlife Tracking</li>
        <li>Deforestation</li>
        <li>Predictive Analysis</li>
      </ul>
      <div >
        <button className="button">
          Login
        </button>
        <button className="button">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
