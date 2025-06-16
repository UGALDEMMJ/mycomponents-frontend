import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/all";
import {Link} from "react-router-dom";

gsap.registerPlugin(MorphSVGPlugin);

type HeadeProps = {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
};

export const Header: React.FC<HeadeProps> = (
  { onToggleSidebar, isSidebarOpen },
) => {
  const iconRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if(!iconRef) return;
    const target = isSidebarOpen ? "#icon-close" : "#icon-open";

    gsap.to(iconRef.current,{
      duration: 0.5,
      morphSVG: target,
      ease: "power1.inOut"
    });
  }, [isSidebarOpen]);

  return (
    <header className="w-full bg-gradient-to-r bg-black p-4 flex justify-between">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/dashboard"} className="text-2xl sm:text-3xl font-space-mono text-white mb-4 hover:text-cyan-500">
          MyComponents
        </Link>
      </div>
      <div className="container mx-auto flex justify-end">
        <button
          onClick={onToggleSidebar}
          className="relative w-10 h-10 text-white mb-4"
        >
          <svg viewBox="0 0 100 100" width="40" height="40" className="text-white fill-current">
          {/* Ícono principal que se morphéa */}
          <path
            id="morph-icon"
            ref={iconRef}
            d="M30,50 L70,50 M50,30 L50,70" // ejemplo simple: cruz
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          {/* Iconos ocultos (objetivo del morph) */}
          <path id="icon-open" d="M20,50 L80,50" fill="none" stroke="none" />
          <path id="icon-close" d="M30,50 L70,50 M50,30 L50,70" fill="none" stroke="none" />
        </svg>
        </button>
      </div>
    </header>
  );
};
