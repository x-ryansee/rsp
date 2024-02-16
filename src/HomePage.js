import React, { useState,useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer } from 'three';

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

  return <primitive object={gltf.scene} position={[-1, 0, 0]} scale={[2.5, 2.5, 2.5]} />;
};

const HomePage = ({ onEnter }) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const containerRef = useRef();

  // Combined handleClick function
  const handleClick = () => {
    setIsShrunk(!isShrunk); // Toggle the isShrunk state
    onEnter(true); // Signal that the user has "entered" the site
  };

  const containerStyle = {
    transition: 'transform 0.5s ease',
    transform: isShrunk ? 'scale(0.56)' : 'scale(1)',
    transformOrigin: 'center center',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    background: 'black',
  };

  return (
    <div ref={containerRef} className="canvas-container" style={containerStyle}>
      <Canvas className="model-canvas" camera={{ position: [-5, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Model />
      </Canvas>
      <div className="home-about">Full-Stack Developer</div>
      <button 
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', color: 'white', backgroundColor: 'transparent', border: '2px solid white', cursor: 'pointer', fontFamily: 'Montserrat Alternates'}}
        onClick={handleClick}
      >
        Enter
      </button>
    </div>
  );
};

export default HomePage;