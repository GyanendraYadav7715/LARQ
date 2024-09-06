import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cyl from "./Cyl";
import {Bloom,EffectComposer,ToneMapping} from "@react-three/postprocessing";
import React from "react";

const Technology: React.FC = () => {
  return (
    <>
      <div className="w-full h-full bg-[#000000b6] fixed ">
        <Canvas camera={{ fov: 30, position: [0, 0, 10] }}>
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
          <ambientLight intensity={2} />
          <Cyl />
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={0}
              luminanceThreshold={25}
              luminanceSmoothing={4}
            />
            <ToneMapping adaptive />
          </EffectComposer>
        </Canvas>
      </div>
      <div className="p-4 w-full h-[100vh] bg-transparent absolute top-0 left-0 flex items-center justify-between">
        <div className="space-y-11">
          <h1 className="text-white text-3xl font-bold">
            Happy Teacher's Day!
          </h1>
          <p className="text-white w-80">
            🎉 Dear teachers, your dedication, guidance, and knowledge shape the
            minds and futures of countless students. Your impact goes far beyond
            the classroom, inspiring us to dream big and achieve great things.
            Thank you for being the guiding light, the motivator, and the mentor
            in our journey of learning. We are forever grateful for your wisdom,
            patience, and unwavering support. Wishing you all a wonderful day
            filled with love and appreciation.
          </p>
          <h1 className="text-white text-3xl font-bold w-80">
            You truly make the world a better place! 🌟📚🎓
          </h1>
        </div>
        <div className="space-y-11">
          <h1 className="text-white text-3xl font-bold">
            Happy Teacher's Day!
          </h1>
          <p className="text-white w-80">
            🎉 Dear teachers, your dedication, guidance, and knowledge shape the
            minds and futures of countless students. Your impact goes far beyond
            the classroom, inspiring us to dream big and achieve great things.
            Thank you for being the guiding light, the motivator, and the mentor
            in our journey of learning. We are forever grateful for your wisdom,
            patience, and unwavering support. Wishing you all a wonderful day
            filled with love and appreciation.
          </p>
          <h1 className="text-white text-3xl font-bold w-80">
            You truly make the world a better place! 🌟📚🎓
          </h1>
        </div>
      </div>
    </>
  );
};

export default Technology;
