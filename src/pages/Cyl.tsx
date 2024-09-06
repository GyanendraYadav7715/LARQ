import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

 
const Cyl: React.FC = () => {
  
  const tex = useTexture("./happy_teachers_day1[1].png");
  tex.needsUpdate = true;

   
  const cyl = useRef<THREE.Mesh>(null);

  
  useFrame((state, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += delta;  
    }
  });

    return (
      <group rotation={[0, 1.5, 0]}>
        <mesh ref={cyl}>
          <cylinderGeometry args={[2,2,5, 80, 80, true]} />
          <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
        </mesh>
      </group>
    );
};

export default Cyl;
