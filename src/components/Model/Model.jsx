import React from 'react';
import { useGLTF } from '@react-three/drei';
import model from '../../assets/3d/3-Shapes.glb';

export function Model(props) {
  const { nodes, materials } = useGLTF(model);

  return (
    <group {...props} dispose={null} position={[0, -0.5, 0]}>

      {/* LEFT: Place of Birth */}
      <group position={[-0.5, -0.3, 0.7]}>
        <mesh geometry={nodes.Curve446.geometry} material={materials['SVGMat.017']} rotation={[Math.PI / 2, 0, 0]} scale={14.983} position={[-1.87, 0.93, -2.753]} />
        <mesh geometry={nodes.Curve447.geometry} material={nodes.Curve447.material} rotation={[Math.PI / 2, 0, 0]} scale={12.983} position={[-1.871, 0.504, -2.753]} />
        <mesh geometry={nodes.Curve448.geometry} material={materials['SVGMat.018']} rotation={[Math.PI / 2, 0, 0]} scale={12.983} position={[-1.873, 1.035, -2.753]} />
        <mesh geometry={nodes.Curve449.geometry} material={materials['SVGMat.019']} rotation={[Math.PI / 2, 0, 0]} scale={11.983} position={[-1.55, 0.787, -1.753]} />
        <mesh geometry={nodes.Text.geometry} material={materials['GREEN CIRCLE']} rotation={[Math.PI / 2, 0, 0]} scale={0.125} position={[-2.203, 0.713, -2.715]} />
      </group>

      {/* CENTER: Birth Name (slightly back in z-axis) */}
      <group position={[-0.5, -0.4, 1.5]}>
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

      {/* RIGHT: Date of Birth */}
      <group position={[0.2, -0.3, -1.5]}>
        <mesh geometry={nodes.Curve718.geometry} material={materials['SVGMat.014']} rotation={[Math.PI / 2, 0, 0]} scale={14.547} position={[0.78, 1.025, -0.159]} />
        <mesh geometry={nodes.Curve719.geometry} material={nodes.Curve719.material} rotation={[Math.PI / 2, 0, 0]} scale={13.547} position={[0.779, 0.622, -0.159]} />
        <mesh geometry={nodes.Curve720.geometry} material={nodes.Curve720.material} rotation={[Math.PI / 2, 0, 0]} scale={13.547} position={[0.781, 1.145, -0.159]} />
        <mesh geometry={nodes.Curve721.geometry} material={nodes.Curve721.material} rotation={[Math.PI / 2, 0, 0]} scale={13.547} position={[0.781, 1.217, -0.159]} />
        <mesh geometry={nodes.Curve722.geometry} material={materials['SVGMat.015']} rotation={[Math.PI / 2, 0, 0]} scale={13.547} position={[0.781, 1.126, -0.159]} />
        <mesh geometry={nodes.Curve723.geometry} material={materials['SVGMat.016']} rotation={[Math.PI / 2, 0, 0]} scale={12.547} position={[0.8, 0.817, -0.059]} />
        <mesh geometry={nodes.Text003.geometry} material={materials['GREEN CIRCLE']} rotation={[Math.PI / 2, 0, 0]} scale={0.125} position={[0.458, 0.866, -0.118]} />
      </group>

    </group>
  );
}

useGLTF.preload(model);
export default Model;
