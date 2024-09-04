//import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cyl from "./Cyl";
import {Bloom,EffectComposer,ToneMapping} from "@react-three/postprocessing";
import React from "react";

const Technology: React.FC = () => {
  return (
    <>
      <div className="w-full h-full bg-black fixed">
        <Canvas camera={{ fov: 65, position: [0, 0, 10] }}>
          {/* <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          /> */}
          <ambientLight intensity={0.5} />
          <Cyl />
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={32.0}
              luminanceThreshold={0}
              luminanceSmoothing={0}
            />
            <ToneMapping adaptive />
          </EffectComposer>
        </Canvas>
      </div>
      <div className="p-4 w-full h-[100vh] bg-transparent absolute top-0 left-0">
        <h1 className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      </div>
    </>
  );
};

export default Technology;
