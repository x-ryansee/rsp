import React, { useRef, useEffect } from 'react';
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
  return (
    <Canvas className="model-canvas" data-aos="fade-up" data-aos-offset="200" data-aos-once="true"
            camera={{ position: [-5, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={.15} penumbra={1} />
      <pointLight position={[0, 0, 0]} />
      <Model />
    </Canvas>
  );
};

export default HomePage;
