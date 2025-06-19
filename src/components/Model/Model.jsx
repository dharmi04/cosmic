import React, { useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import model from '../../assets/3d/3-Shapes.glb';
import { Float } from '@react-three/drei';


export function Model(props) {
  const { nodes, materials } = useGLTF(model);
  const { viewport } = useThree();

  const [layout, setLayout] = useState({
    left: [-0.5, -0.3, 0.7],
    center: [-0.5, -0.4, 1.5],
    right: [0.2, -0.3, -1.5],
    scale: 1,
    textLeftOffset: -1.53, // new
  });

  useEffect(() => {
    if (viewport.width < 5) {
      // Mobile or narrow screens
      setLayout({
        left: [0.16, 0.3, 1],
        center: [-0.9, 0.36, 0.8],
        right: [-0.8, 0.3, -2.7],
        scale: 0.7,
        textLeftOffset: -1.76
      });
    } else if (viewport.width < 10) {
      // Tablet or medium screens
      setLayout({
        left: [-0.5, -0.3, 0.9],
        center: [-0.5, -0.4, 1.5],
        right: [0.5, -0.3, -1.3],
        scale: 1,
        textLeftOffset: -1.53
      });
    } else {
      // Default layout for large screens
      setLayout({
        left: [-0.5, -0.3, 0.7],
        center: [-0.5, -0.4, 1.5],
        right: [0.2, -0.3, -1.5],
        scale: 1
      });
    }
  }, [viewport.width]);

  return (
    <group {...props} dispose={null} position={[0, -0.5, 0]} scale={layout.scale}>

      {/* LEFT: Place of Birth */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={layout.left}>
        <mesh geometry={nodes.Curve446.geometry} material={materials['SVGMat.017']} rotation={[Math.PI / 2, 0, 0]} scale={14.983} position={[-1.87, 0.93, -2.753]} />
        <mesh geometry={nodes.Curve447.geometry} material={nodes.Curve447.material} rotation={[Math.PI / 2, 0, 0]} scale={12.983} position={[-1.871, 0.504, -2.753]} />
        <mesh geometry={nodes.Curve448.geometry} material={materials['SVGMat.018']} rotation={[Math.PI / 2, 0, 0]} scale={12.983} position={[-1.873, 1.035, -2.753]} />
        {/* for text */}
        <mesh geometry={nodes.Curve449.geometry} material={materials['SVGMat.019']} rotation={[Math.PI / 2, 0, 0]} scale={11.883} position={[layout.textLeftOffset ?? -1.53, 0.787, -1.753]} /> 
        <mesh geometry={nodes.Text.geometry} material={materials['GREEN CIRCLE']} rotation={[Math.PI / 2, 0, 0]} scale={0.125} position={[-2.203, 0.713, -2.715]} />
      </group>
      </Float>
      {/* CENTER: Birth Name */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.35}>
      <group position={layout.center}>
        <mesh geometry={nodes.Curve581.geometry} material={nodes.Curve581.material} rotation={[Math.PI / 2, 0, 0]} scale={18.427} position={[-0.329, 1.216, -3.524]} />
        <mesh geometry={nodes.Curve707.geometry} material={materials['SVGMat.010']} rotation={[Math.PI / 2, 0, 0]} scale={15.513} position={[0.018, 1.125, -3.559]} />
        <mesh geometry={nodes.Curve708.geometry} material={nodes.Curve708.material} rotation={[Math.PI / 2, 0, 0]} scale={15.513} position={[0.017, 0.665, -3.559]} />
        <mesh geometry={nodes.Curve709.geometry} material={materials['SVGMat.011']} rotation={[Math.PI / 2, 0, 0]} scale={15.513} position={[0.017, 1.253, -3.559]} />
        <mesh geometry={nodes.Curve710.geometry} material={materials['SVGMat.010']} rotation={[Math.PI / 2, 0, 0]} scale={15.513} position={[0.017, 1.364, -3.559]} />
        <mesh geometry={nodes.Curve711.geometry} material={materials['SVGMat.010']} rotation={[Math.PI / 2, 0, 0]} scale={15.513} position={[0.025, 1.246, -3.559]} />
        <mesh geometry={nodes.Curve712.geometry} material={materials['SVGMat.012']} rotation={[Math.PI / 2, 0, 0]} scale={15.513} position={[0.014, 1.244, -3.559]} />
        <mesh geometry={nodes.Curve716.geometry} material={nodes.Curve716.material} rotation={[Math.PI / 2, 0, 0]} scale={15.513} position={[0.017, 1.366, -3.559]} />
        <mesh geometry={nodes.Curve717.geometry} material={materials['SVGMat.013']} rotation={[Math.PI / 2, 0, 0]} scale={15.513} position={[-0.01, 0.999, -3.559]} />
        <mesh geometry={nodes.Text001.geometry} material={materials['GREEN CIRCLE']} rotation={[Math.PI / 2, 0, 0]} scale={0.125} position={[-0.259, 0.866, -3.512]} />
        <mesh geometry={nodes.Text002.geometry} material={materials.Material} rotation={[Math.PI / 2, 0, 0]} scale={0.072} position={[-0.077, 1.218, -3.489]} />
        <mesh geometry={nodes.Curve003.geometry} material={materials['SVGMat.012']} rotation={[Math.PI / 2, 0, 0]} scale={[10.591, 14.125, 7.632]} position={[0.017, 1.241, -3.546]} />
      </group>
      </Float>
      {/* RIGHT: Date of Birth */}
      
<Float speed={2} rotationIntensity={0.25} floatIntensity={0.3}>
      <group position={layout.right}>
        <mesh geometry={nodes.Curve718.geometry} material={materials['SVGMat.014']} rotation={[Math.PI / 2, 0, 0]} scale={14.547} position={[0.78, 1.025, -0.159]} />
        <mesh geometry={nodes.Curve719.geometry} material={nodes.Curve719.material} rotation={[Math.PI / 2, 0, 0]} scale={13.547} position={[0.779, 0.622, -0.159]} />
        <mesh geometry={nodes.Curve720.geometry} material={nodes.Curve720.material} rotation={[Math.PI / 2, 0, 0]} scale={13.547} position={[0.781, 1.145, -0.159]} />
        <mesh geometry={nodes.Curve721.geometry} material={nodes.Curve721.material} rotation={[Math.PI / 2, 0, 0]} scale={13.547} position={[0.781, 1.217, -0.159]} />
        <mesh geometry={nodes.Curve722.geometry} material={materials['SVGMat.015']} rotation={[Math.PI / 2, 0, 0]} scale={13.547} position={[0.781, 1.126, -0.159]} />
        <mesh geometry={nodes.Curve723.geometry} material={materials['SVGMat.016']} rotation={[Math.PI / 2, 0, 0]} scale={12.547} position={[0.8, 0.817, -0.059]} />
        <mesh geometry={nodes.Text003.geometry} material={materials['GREEN CIRCLE']} rotation={[Math.PI / 2, 0, 0]} scale={0.125} position={[0.458, 0.866, -0.118]} />
      </group>
      </Float>
    </group>
  );
}

useGLTF.preload(model);
export default Model;
