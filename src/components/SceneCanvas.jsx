import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stars, useScroll, ScrollControls } from '@react-three/drei';
import { useRef } from 'react';
import './SceneCanvas.css';


function CustomModel({ position, scrollValue }) {
  const ref = useRef();
  const { scene } = useGLTF('/models/new.glb');

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.002;
      ref.current.position.x = position[0] + scrollValue.current * 5;
      ref.current.position.y = position[1] + scrollValue.current * 1.5;
    }
  });

  return <primitive ref={ref} object={scene} scale={0.5} position={position} />;
}

function SceneContent() {
  const scroll = useScroll();
  const scrollValue = useRef(0);

  useFrame(() => {
    scrollValue.current = scroll.offset;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Stars radius={100} depth={50} count={10000} factor={4} saturation={0} fade />
      <CustomModel position={[-2, -1, 0]} scrollValue={scrollValue} />
      <CustomModel position={[2, -1, 0]} scrollValue={scrollValue} />
    </>
  );
}

export default function SceneCanvas() {
  return (
    <div className="scene-canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ScrollControls pages={1} damping={4}>
          <SceneContent />
        </ScrollControls>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}