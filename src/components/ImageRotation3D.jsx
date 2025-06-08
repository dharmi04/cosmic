import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ImageRotation3D.css';

import centerImage from '../assets/middle-image.png';
import image1 from '../assets/image-1.png';
import image2 from '../assets/image-2.png';
import image3 from '../assets/image-3.png';
import image4 from '../assets/image-5.png';
import image5 from '../assets/image-6.png';

const ImageRotation3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 15);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000011, 1);
    
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    
    mountRef.current.appendChild(renderer.domElement);
    

    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.4, 
      transparent: true,
      opacity: 0.6, 
    });
    
    const starVertices = [];
    for (let i = 0; i < 15000; i++) {
      starVertices.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      );
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    scene.add(new THREE.AmbientLight(0x404040, 0.6));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(10, 10, 5);
    scene.add(dirLight);

    const rimLight1 = new THREE.DirectionalLight(0x9d4edd, 0.3);
    rimLight1.position.set(-10, 0, -10);
    scene.add(rimLight1);

    const rimLight2 = new THREE.DirectionalLight(0x4ecdc4, 0.3);
    rimLight2.position.set(10, 0, -10);
    scene.add(rimLight2);

    const loader = new THREE.TextureLoader();

    const centerTexture = loader.load(centerImage);
    const centerMaterial = new THREE.MeshLambertMaterial({
      map: centerTexture,
      transparent: true,
      opacity: 1,
    });
    const centerGeometry = new THREE.PlaneGeometry(4, 4);
    const centerMesh = new THREE.Mesh(centerGeometry, centerMaterial);
    centerMesh.position.set(0, 0, 0);
    scene.add(centerMesh);

    const ringGeometry = new THREE.RingGeometry(2.2, 2.4, 32);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x4ecdc4,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.position.set(0, 0, 0.1);
    scene.add(ring);

    const orbitGroup = new THREE.Group();
    const orbitingImages = [image1, image2, image3, image4, image5];
    const radius = 8;

    orbitingImages.forEach((src, i) => {
      const texture = loader.load(src);
      const material = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
        opacity: 1,
        emissive: new THREE.Color(0x222222),
      });
      const geometry = new THREE.PlaneGeometry(2.5, 2.5);
      const mesh = new THREE.Mesh(geometry, material);

      const angle = (i / orbitingImages.length) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(i * 1.2) * 1; 
      mesh.position.set(x, y, z);
      orbitGroup.add(mesh);
    });

    scene.add(orbitGroup);

    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      stars.rotation.y += 0.0002;
      stars.rotation.x += 0.0001;

      orbitGroup.rotation.y += 0.001; 

      orbitGroup.children.forEach((child, i) => {
        child.lookAt(camera.position);
        const floatY = Math.sin(time + i) * 0.3;
        child.position.y = floatY;
      });

      centerMesh.rotation.z += 0.005;
      centerMesh.position.y = Math.sin(time * 0.3) * 0.2;
      const breathe = 1 + Math.sin(time * 0.4) * 0.05;
      centerMesh.scale.setScalar(breathe);

      ring.rotation.z -= 0.01;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="three-container" />;
};

export default ImageRotation3D;
