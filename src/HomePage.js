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

const HomePage = () => {
    const [fade, setFade] = useState(1); // Opacity starts at full
    const ref = useRef();
  
    useEffect(() => {
      const handleScroll = () => {
        const position = window.pageYOffset;
        // Assuming 1000 is where you want to start fading out
        const opacity = Math.max(1 - position / 1000, 0);
        setFade(opacity);
      };
  
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div ref={ref} style={{ opacity: fade }}>
        <Canvas className="model-canvas" camera={{ position: [-5, 2, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={.15} penumbra={1} />
            <pointLight position={[0, 0, 0]} />
            <Model />
        </Canvas>
      </div>
    );
  };
  
  export default HomePage;