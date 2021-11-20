import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export default function Chart(props) {
  const ref = useRef();
  const chart = useLoader(GLTFLoader, 'chart1.glb');
  return (
    <primitive ref={ref} position={props.position} scale={[1, 1, 1]} object={chart.scene} />
  )
}