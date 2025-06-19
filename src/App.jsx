import React from 'react';
import Hero from "./components/Hero";
import BirthSection from "./components/BirthSection";
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css'
import ThirdPart from './components/ThirdPart';

//import SceneCanvas from "./components/SceneCanvas";

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }} className="scroll-container">
      {/* <MouseLightEffect /> */}
      {/* <NavBar /> */}
      <ParallaxProvider>
      <Hero />
      
      <BirthSection/>
      <ThirdPart />
      </ParallaxProvider>


            {/* <BirthOptions /> */}
    
      {/* <SceneCanvas /> */}

      {/* <ScrollAnimatedCircle /> */}
    </div>
  );
}

export default App;