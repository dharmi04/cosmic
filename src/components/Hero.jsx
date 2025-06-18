import React, { useEffect, useState } from 'react';
import './Hero.css';
import NavBar from './NavBar';
import wellnessImage from '../assets/Hero-image.png';
import { Parallax } from 'react-scroll-parallax';

const rotatingWords = [
  "Balance", "Energy", "Relationships", "Mindfulness", "Prosperity", "Astrology",
  "Numerology", "Love", "Vastu", "Healing Rituals", "Meditation", "Spiritual Wisdom"
];

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Delay to simulate smooth entrance
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
<div className="hero">
      <NavBar />
      <div className="hero-container">
        <div className="hero-content">
          <div className={`hero-text ${animate ? 'animate-in' : ''}`}>
          <Parallax speed={-10}>
            <h1 className="hero-title">
              AI for Your{" "}
              <span className="dropping-texts">
                {rotatingWords.map((word, index) => (
                  <div key={index}>{word}</div>
                ))}
              </span>
            </h1>
            </Parallax>
            <Parallax speed={-10}>
            <p className="hero-subtitle">
              Awakening 2.0: Discover Holistic Self-Care<br />
              from Ancient Wisdom enabled by AI
            </p>
            </Parallax>
          </div>
          <div className={`hero-image ${animate ? 'animate-in' : ''}`}>
          <Parallax speed={-10}>
            <img src={wellnessImage} alt="Wellness Visual" />
            </Parallax>
          </div>
        </div>
      </div>
      
    </div>
    
    </div>
    
  );
};

export default Hero;
