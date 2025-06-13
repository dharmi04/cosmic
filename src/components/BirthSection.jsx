// import React from 'react'
// import './BirthSection.css'
// import logo from '../assets/logo.png'
// import { Canvas } from '@react-three/fiber'
// import { Suspense } from 'react'
// import Model from './Model/Model.jsx' // adjust path if needed

// const BirthSection = () => {
//   return (
//     <div className='birthsection'>
//       <div className="banner">
//         <div className="banner-overlay">
//           <div className="content-wrapper">
//           <div className="banner-top">
//             <img src={logo} alt="logo" className="logo" />
//             <button className="self-care-btn">SELF-CARE</button>
//             <button className="aiyuh-btn">AIYUH ↗</button>
//           </div>
//           <div className="banner-content">
//             <p>Your birth determines exact positions of celestial bodies and<br />your physiological features!</p>
//           </div>
          
//           </div>
          

//           {/* 3D Model Canvas */}
//           {/* <div className="model-container">
//             <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
//               <ambientLight />
//               <directionalLight position={[5, 5, 5]} />
//               <Suspense fallback={null}>
//                 <Model />
              
//               </Suspense>
//             </Canvas>
//           </div> */}

//         </div>
//       </div>
//     </div>

    
  


//   )
// }

// export default BirthSection


import React from 'react';
import './BirthSection.css';
import Model from './Model/Model.jsx';
import logo from '../assets/logo.png'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Center } from '@react-three/drei';


const BirthSection = () => {
  return (
    <div className="birth-section">
      <div className="top-bar">
      <img src={logo} alt="logo" className="logo" />
        <a href="#" className="aiyuh-btn">AIYUH ↗</a>
      </div>

      <div className="self-care-button">SELF-CARE</div>
      <p className="main-text">
        Your birth determines exact positions of celestial bodies and<br />
        your physiological features!
      </p>

 <div className="model-wrapper">
             <Canvas camera={{ position: [0, 0, 5], fov: 24 }}>
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

    </div>
  );
};

export default BirthSection;
