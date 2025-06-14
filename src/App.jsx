import React from 'react';
import Hero from "./components/Hero";
import BirthSection from "./components/BirthSection";

//import SceneCanvas from "./components/SceneCanvas";

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* <MouseLightEffect /> */}
      {/* <NavBar /> */}
      <Hero />
      <BirthSection/>

            {/* <BirthOptions /> */}
    
      {/* <SceneCanvas /> */}

      {/* <ScrollAnimatedCircle /> */}
    </div>
  );
}

export default App;