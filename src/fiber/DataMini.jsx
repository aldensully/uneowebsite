import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Cube(props) {

  return (
    <mesh
      {...props}
      scale={2}
      >
      <boxGeometry args={[1, 1.6, 1]} />
      <meshStandardMaterial color='purple' />
    </mesh>
  )
}
export default function DataMini(){
  return(
    <Canvas>
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />
    <Cube rotation={[0,65,0]} position={[0, 0, 0]} />
    <Cube rotation={[0,65,0]} position={[-1, 0, -1]} />
    <Cube rotation={[0,65,0]} position={[-2, 0, -2]} />
  </Canvas>
  )
}