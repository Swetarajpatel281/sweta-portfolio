import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

// Generate random points in a 3D space
const generatePoints = (count: number) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    points[i3] = (Math.random() - 0.5) * 10;
    points[i3 + 1] = (Math.random() - 0.5) * 10;
    points[i3 + 2] = (Math.random() - 0.5) * 10;
  }
  return points;
};

const ParticleBackground = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  
  // Animation frame
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // Rotate the points
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.075;
  });

  return (
    <Points ref={pointsRef} positions={generatePoints(1500)} stride={3}>
      <PointMaterial 
        transparent
        color={darkMode ? '#ffffff' : '#000000'}
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

export default ParticleBackground;