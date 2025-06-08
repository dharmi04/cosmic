import BirthOptions from "./components/BirthOption";
import React from 'react';
//import ScrollAnimatedCircle from "./components/ScrollAnimatedCircle";

import ImageRotation3D from "./components/ImageRotation3D";
import SceneCanvas from "./components/SceneCanvas";
import FlowingTextAnimation from "./components/FlowTextAnimation";
//import SceneCanvas from "./components/SceneCanvas";
function App() {
  return (
    <div>
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