import React from 'react';
import Hero from "./components/Hero";
import BirthSection from "./components/BirthSection";
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css'
import ThirdPart from './components/ThirdPart';
import ScrollContainer from './components/ScrollContainer';

//import SceneCanvas from "./components/SceneCanvas";

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <ScrollContainer>

        <div className="fullpage-section"><Hero /></div>
        <div className="fullpage-section"><BirthSection /></div>
        <div className="fullpage-section"><ThirdPart /></div>
  

      </ScrollContainer >
      {/* <MouseLightEffect /> */}
      {/* <NavBar /> */}
      {/* <ParallaxProvider> */}
      
      {/* </ParallaxProvider> */}


            {/* <BirthOptions /> */}
    
      {/* <SceneCanvas /> */}

      {/* <ScrollAnimatedCircle /> */}
    </div>
  );
}

export default App;