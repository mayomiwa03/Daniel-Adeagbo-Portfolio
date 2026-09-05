import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function LowPolyBlob({ position = [3, 5, 2], scale = 1 }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.12;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[2, 2]} />

      <meshBasicMaterial color="#333333" wireframe transparent opacity={0.7} />
    </mesh>
  );
}

export default LowPolyBlob;
