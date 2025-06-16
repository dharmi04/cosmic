import React from 'react';
import './NavBar.css';
import logo from '../assets/logo1.png'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="/" className="nav-brand">
          <img
            src= {logo} // replace with the correct path to your logo
            alt="Aiyuh Logo"
            className="nav-logo"
          />
        </a>

        <div className="nav-links">
          <a href="#about" className="nav-link">About Us</a>
          <a href="#blog" className="nav-link">Blog</a>
          <a href="#self-care" className="nav-link nav-link-highlight">SELF-CARE</a>
          <a href="#ask-ai" className="nav-link nav-link-ai">ASK AI AIYUH</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
