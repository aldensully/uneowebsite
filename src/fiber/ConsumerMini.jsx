import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Cube(props) {

  return (
    <mesh
      {...props}
      scale={2}
      >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='blue' />
    </mesh>
  )
}
export default function ConsumerMini(){
  return(
    <Canvas >
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />
    <Cube position={[-2, 0, 0]} />
    <Cube position={[2, 0, 0]} />
  </Canvas>
  )
}