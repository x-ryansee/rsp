import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';
import './homepage.css'; // Import the CSS

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/name.glb'); 
  const mixer = useRef();

  useEffect(() => {
    if (gltf.animations.length > 0) {
      mixer.current = new AnimationMixer(gltf.scene);
      const action = mixer.current.clipAction(gltf.animations[0]); 
      action.play();
    }
  }, [gltf.animations, gltf.scene]);

  useFrame((state, delta) => mixer.current?.update(delta));

  return <primitive object={gltf.scene} scale={[3, 3, 3]} />;
};

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Canvas className="model-canvas">
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={.15} penumbra={1} />
        <pointLight position={[0, 0, 0]} />
        <Model />
      </Canvas>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
