import React from 'react';
import './Hero.css';
import NavBar from './NavBar';
import wellnessImage from '../assets/Hero-image.png';

const rotatingWords = [
  "Balance",
  "Energy",
  "Relationships",
  "Mindfulness",
  "Prosperity",
  "Astrology",
  "Numerology",
  "Love",
  "Vastu",
  "Healing Rituals",
  "Meditation",
  "Spiritual Wisdom"
];

const Hero = () => {
  return (
    <div className="hero">
      <NavBar />
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
          <h1 className="hero-title">
              AI for Your{" "}
              <span className="dropping-texts">
                {rotatingWords.map((word, index) => (
                  <div key={index}>{word}</div>
                ))}
              </span>
            </h1>
            <p className="hero-subtitle">
              Awakening 2.0: Discover Holistic Self-Care<br />
              from Ancient Wisdom enabled by AI
            </p>
          </div>
          <div className="hero-image">
            <img src={wellnessImage} alt="Wellness Visual" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
