import React, { useRef } from "react"; // <-- Aquí se importa React correctamente
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Welcome: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const circle = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(".boxMessage", {
       rotation: "+=360",
       ease: "none" 
      });
  }, { scope: container, revertOnUpdate:true });

  return (
    <>
      <div className=" bg-black h-screen w-full flex items-center justify-center">
        <div ref={container} className="bg-gray-400 p-6 rounded-xl text-white">
          <div className="boxMessage">
            Hola Mundo
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
