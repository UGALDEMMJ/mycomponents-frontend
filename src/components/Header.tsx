import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/all";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

gsap.registerPlugin(MorphSVGPlugin);

type HeadeProps = {
  onToggleSidebar: () => void;
  onToggleSidebarMobile: () => void;
  isSidebarOpen: boolean;
  isSidebarOpenMovil: boolean;
};

export const Header: React.FC<HeadeProps> = (
  { onToggleSidebar, onToggleSidebarMobile, isSidebarOpen },
) => {
  const iconRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!iconRef.current) return;

    const target = isSidebarOpen ? "#icon-close" : "#icon-open";
    const targetElement = document.querySelector(target);
    if (!targetElement) return;

    const tween = gsap.to(iconRef.current, {
      duration: 0.5,
      morphSVG: target,
      ease: "power1.inOut",
    });

    return () => {
      tween.kill();
    };
  }, [isSidebarOpen]);

  return (
    <header className="w-full bg-gradient-to-r bg-black p-4 flex justify-between">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to={"/dashboard"}
          className="text-2xl sm:text-3xl font-space-mono text-white mb-4 hover:text-cyan-500"
        >
          MyComponents
        </Link>
      </div>
      <div className="container mx-auto flex justify-end">
        {/* Botón solo visible en pantallas grandes */}
        <button
          onClick={onToggleSidebar}
          className="hidden sm:block relative w-10 h-10 text-white mb-4"
        >
          <svg
            viewBox="0 0 100 100"
            width="40"
            height="40"
            className="text-white fill-current"
          >
            {/* Ícono principal que se morphéa */}
            <path
              id="morph-icon"
              ref={iconRef}
              d="M30,50 L70,50 M50,30 L50,70"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            {/* Iconos ocultos (objetivo del morph) */}
            <path
              id="icon-open"
              d="M20,50 L80,50"
              fill="none"
              stroke="transparent"
            />
            <path
              id="icon-close"
              d="M30,50 L70,50 M50,30 L50,70"
              fill="none"
              stroke="transparent"
            />
          </svg>
        </button>
        {/* Botón solo visible en pantallas pequeñas */}
        <button
          onClick={onToggleSidebarMobile}
          className="block sm:hidden relative w-10 h-10 text-white mb-4"
          aria-label="Open sidebar"
        >
          <Menu size={32} />
        </button>
      </div>
    </header>
  );
};
