import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './BirthSection.css';
import { Model } from './Model/Model.jsx';
import bgImage from '../assets/bg-image.png';
import logo from '../assets/logo.png'

const ViewportBox = ({ label, cameraPosition }) => (
  <div className="birth-option">
    <div className="glb-canvas">
      <Canvas camera={{ position: cameraPosition, fov: 35 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
    </div>
    <div>{label}</div>
  </div>
);

const BirthSection = () => {
  return (
    <div className="birth-section">
      <div className="birth-overlay">
      <div className="birth-header-bar">
  <img src={logo} alt="aiyuh logo" className="birth-logo" />
  <button className="self-care-btn">SELF-CARE</button>
  <a href="#" className="aiyuh-btn">
    AIYUH ↗
  </a>
</div>

        <div className="birth-header">
          <p>Your birth determines exact positions of celestial bodies and your physiological features!</p>
        </div>

        <div className="birth-options">
          <ViewportBox cameraPosition={[-2, 1, 2.5]} />
        </div>

        {/* <div className="scroll-indicator">⌄</div> */}
      </div>
    </div>
  );
};

export default BirthSection;
