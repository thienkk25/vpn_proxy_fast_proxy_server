import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, PointMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSphere = () => {
  const ref = useRef();
  
  // Generate random points on a sphere
  const [positions] = useMemo(() => {
    const count = 3000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 2.5; // Radius
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return [pos];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
      
      // Slight mouse interaction
      const targetX = (state.mouse.x * Math.PI) / 10;
      const targetY = (state.mouse.y * Math.PI) / 10;
      
      ref.current.rotation.x += 0.05 * (targetY - ref.current.rotation.x);
      ref.current.rotation.y += 0.05 * (targetX - ref.current.rotation.y);
    }
  });

  return (
    <group>
      {/* Outer particle sphere */}
      <points ref={ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          color="#00f2fe"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </points>
      
      {/* Inner glowing sphere */}
      <Sphere args={[2.4, 64, 64]}>
        <meshBasicMaterial color="#0a0f1d" transparent opacity={0.9} />
      </Sphere>
      
      {/* Inner wireframe sphere */}
      <Sphere args={[2.45, 32, 32]}>
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.15} />
      </Sphere>
    </group>
  );
};

export default function CyberGlobe() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <color attach="background" args={['#050811']} />
        <ambientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ParticleSphere />
      </Canvas>
    </div>
  );
}
