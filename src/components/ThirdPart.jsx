import React, { useEffect, useRef, useState } from 'react';
import './ThirdPart.css';
import logo from '../assets/logo.png';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Center } from '@react-three/drei';
import { Parallax } from 'react-scroll-parallax';
// import VImageTrail from './VImageTrail';
import Model from './Model/Model2.jsx';
import AstrologicalWheel from './AstrologicalWheel';

const ThirdPart = () => {
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
      <div className='third-part'>
    <div className="top-bar">
        <img src={logo} alt="logo" className="logo" />
        <a href="#" className="aiyuh-btn">AIYUH ↗</a>
      </div>
      <div className={`self-care-button`}>
        SELF-CARE
      </div>
      <p className="main-text">
      Your journey is defined by the actions you take.
      </p>
      <div>
      <div className="model-canvas-container">
  <Canvas camera={{ position: [0, 0, 10], fov: 65 }}>
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Center>
      <Model rotation={[Math.PI / 2, 0, 0]} /> 
</Center>
    </Suspense>
  </Canvas>
</div>
{/* <AstrologicalWheel /> */}
        {/* <VImageTrail /> */}
      </div>
    </div>
  )
}

export default ThirdPart