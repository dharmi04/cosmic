import React, { useEffect, useRef, useState } from 'react';
import './BirthSection.css';
import Model from './Model/Model.jsx';
import logo from '../assets/logo.png';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Center } from '@react-three/drei';
import { Parallax } from 'react-scroll-parallax';

const BirthSection = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('.third-part'); // ID or class of next component
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const sectionRef = useRef();
  const [inView, setInView] = useState(false);
  useEffect(() => {
      
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <div>
      
{/* <div className="fade-divider"></div> */}
<div className="birth-section" ref={sectionRef} id='birth-section'>
      <div className="top-bar">
        <img src={logo} alt="logo" className="logo" />
        <a href="#" className="aiyuh-btn">AIYUH ↗</a>
      </div>

      <div className={`self-care-button fade-in-down ${inView ? 'in-view' : ''}`}>
      <span className="self-care-text">SELF-CARE</span>
      </div>
      {/* <Parallax  scale={[0.5, 1]}> */}
      <p className={`main-text fade-in-left ${inView ? 'in-view' : ''}`}>
        Your birth determines exact positions of celestial bodies and<br />
        your physiological features!
      </p>
      {/* </Parallax>
      <Parallax speed={-10}  > */}
      <div className={`model-wrapper fade-in-right ${inView ? 'in-view' : ''}`}>
        <Canvas camera={{ position: [0, 0, 5], fov: 20 }}>
          <ambientLight />
          <directionalLight 
            position={[2, 2, 5]} 
            intensity={0.8} 
            castShadow 
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <Suspense fallback={null}>
            <Center>
              <Model />
            </Center>
          </Suspense>
        </Canvas>
      </div>
      {/* </Parallax> */}
      <div className="scroll-indicator" onClick={scrollToNext}>
  {/* <span className="scroll-text">SCROLL</span> */}
  <div className="scroll-icon">
    <div className="mouse">
      <div className="wheel"></div>
    </div>
    <div className="arrow-down">↓</div>
  </div>
</div>
    </div>
    </div>
    
  );
};

export default BirthSection;
