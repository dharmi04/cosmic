import BirthOptions from "./components/BirthOption";
import React from 'react';

import ImageRotation3D from "./components/ImageRotation3D";
import SceneCanvas from "./components/SceneCanvas";
import FlowingTextAnimation from "./components/FlowTextAnimation";
import MouseLightEffect from "./components/MouseLightEffect";
//import SceneCanvas from "./components/SceneCanvas";

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Global Mouse Light Effect */}
      <MouseLightEffect />
      
      {/* Your existing components */}
      <BirthOptions />
      <SceneCanvas />
      <ImageRotation3D />
      <FlowingTextAnimation />
      {/* <SceneCanvas /> */}

      {/* <ScrollAnimatedCircle /> */}
    </div>
  );
}

export default App;