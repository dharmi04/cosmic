import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stars } from '@react-three/drei';
import { useRef } from 'react';

function CustomModel({ position, index }) {
  const ref = useRef();
  const { scene } = useGLTF('/models/new.glb');

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
            ref.current.rotation.z += 0.002;
      ref.current.rotation.y += 0.001;
      
      ref.current.position.x = position[0] + Math.sin(time + index) * 0.3;
      ref.current.position.y = position[1] + Math.cos(time * 0.8 + index) * 0.2;
      ref.current.position.z = position[2] + Math.sin(time * 0.5 + index) * 0.1;
    }
  });

  return (
    <primitive 
      ref={ref} 
      object={scene} 
      scale={0.5} 
      position={position}
      castShadow
      receiveShadow
    />
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.4} color="#ffffff" />
      
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.2} 
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      <directionalLight 
        position={[-5, -5, -5]} 
        intensity={0.5} 
        color="#4a90e2"
      />
      
      <directionalLight 
        position={[0, 0, -10]} 
        intensity={0.3} 
        color="#ffa500"
      />
      
      <pointLight 
        position={[0, 5, 0]} 
        intensity={0.8} 
        color="#ffffff"
        distance={20}
        decay={2}
      />
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      
      <CustomModel position={[-2, -1, 0]} index={0} />
      <CustomModel position={[2, -1, 0]} index={Math.PI} />
    </>
  );
}

export default function SceneCanvas() {
  return (
    <div style={{
      margin: 0,
      padding: 0,
      width: '100%',
      height: '600px',
      backgroundImage: 'url("/bg-image-2.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: "'Poppins', sans-serif",
      overflow: 'hidden',
      position: 'relative'
    }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ 
          display: 'block', 
          width: '100%', 
          height: '100%',
          overflow: 'hidden'
        }}
        shadows
        gl={{ antialias: true }}
      >
        <SceneContent />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}