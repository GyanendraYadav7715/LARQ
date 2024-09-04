import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

 
const Cyl: React.FC = () => {
  
  const tex = useTexture("./Screenshot_2024-09-04_132548-removebg-preview.png");
  tex.needsUpdate = true;

   
  const cyl = useRef<THREE.Mesh>(null);

  
  useFrame((state, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += delta;  
    }
  });

    return (
      <group rotation={[0, 1.4, 0.5]}>
        <mesh ref={cyl}>
          <cylinderGeometry args={[2, 2, 2, 60, 60, true]} />
          <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
        </mesh>
      </group>
    );
};

export default Cyl;
