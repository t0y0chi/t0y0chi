import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

export default function Scene3D() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.01;
      sphereRef.current.rotation.y += 0.01;
    }

    if (boxesRef.current) {
      boxesRef.current.rotation.y += 0.005;
      boxesRef.current.children.forEach((box, i) => {
        const t = state.clock.getElapsedTime() + i;
        box.position.y = Math.sin(t) * 0.5;
      });
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#00ff00"
          wireframe
          emissive="#00ff00"
          emissiveIntensity={0.2}
        />
      </Sphere>

      <group ref={boxesRef}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Box
            key={i}
            args={[0.2, 0.2, 0.2]}
            position={[
              Math.cos((i / 8) * Math.PI * 2) * 2,
              0,
              Math.sin((i / 8) * Math.PI * 2) * 2,
            ]}
          >
            <meshStandardMaterial
              color="#00ff00"
              emissive="#00ff00"
              emissiveIntensity={0.5}
            />
          </Box>
        ))}
      </group>
    </>
  );
}