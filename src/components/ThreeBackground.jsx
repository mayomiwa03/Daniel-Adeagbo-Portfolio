import { Canvas } from "@react-three/fiber";

import LowPolyBlob from "./LowPolyBlob";
import { Background } from "./Hero.styles";

function ThreeBackground() {
  return (
    <Background>
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 45,
        }}
      >
        <LowPolyBlob position={[-5, 3, -3]} scale={1.8} />

        <LowPolyBlob position={[5, 2, -6]} scale={2.5} />

        <LowPolyBlob position={[1, -4, -3]} scale={1.2} />
      </Canvas>
    </Background>
  );
}

export default ThreeBackground;
