import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer, SplitText } from "gsap/all";
import { Link } from "react-router-dom";

//Tipo para la config
interface Texts {
  text: string;
  link?: string;
  colors?: {
    text?: string;
    bg?: string;
  };
}

gsap.registerPlugin(useGSAP, Observer, SplitText);

const texts: Texts[] = [
  {
    text: "Your personal UI component library.",
  },
  {
    text: "Store, preview, and organize reusable UI components with ease.",
  },
  {
    text: "Discover components by categories, check out the most viewed ones.",
  },
  {
    text: "With MyComponents.",
    link: "/dashboard",
    colors: {
      text:  "animate-pulse text-blue-600 transition-colors duration-300 ease-in-out hover:text-purple-600 hover:border-b",
    },
  },
];

// Valores por defecto para colores
const defaultColors = {
  text: "text-white", 
};

const Welcome: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(-1);
  const animating = useRef(false);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Esperar a que el DOM esté completamente listo
    const initAnimation = () => {
      const sections = gsap.utils.toArray<HTMLElement>(
        "section",
        containerRef.current,
      );
      const headings = gsap.utils.toArray<HTMLElement>(
        ".section-heading",
        containerRef.current,
      );
      const outerWrappers = gsap.utils.toArray<HTMLElement>(
        ".outer",
        containerRef.current,
      );
      const innerWrappers = gsap.utils.toArray<HTMLElement>(
        ".inner",
        containerRef.current,
      );

      // Configuración inicial CRUCIAL
      gsap.set(sections, {
        autoAlpha: 0,
        zIndex: 0,
        display: "flex", // Asegurar que las secciones usan flex
      });

      // Mostrar solo la primera sección
      gsap.set(sections[0], {
        autoAlpha: 1,
        zIndex: 1,
      });

      gsap.set(outerWrappers, { yPercent: 100 });
      gsap.set(innerWrappers, { yPercent: -100 });

      const splitHeadings = headings.map((heading) => {
        return new SplitText(heading, {
          type: "chars",
          charsClass: "char",
        });
      });

      const wrap = gsap.utils.wrap(0, sections.length);

      const gotoSection = (index: number, direction: number) => {
        index = wrap(index);
        if (currentIndex.current === index || animating.current) return;

        animating.current = true;
        const dFactor = direction > 0 ? 1 : -1;

        const tl = gsap.timeline({
          defaults: { duration: 1, ease: "power2.inOut" },
          onComplete: () => {
            animating.current = false;
          },
        });

        // Animación de salida
        if (currentIndex.current >= 0) {
          tl.to(outerWrappers[currentIndex.current], {
            yPercent: -100 * dFactor,
          })
            .to(innerWrappers[currentIndex.current], {
              yPercent: 100 * dFactor,
            }, 0)
            .to(sections[currentIndex.current], {
              autoAlpha: 0,
              zIndex: 0,
            }, 0.4);
        }

        // Animación de entrada
        tl.set(sections[index], {
          autoAlpha: 1,
          zIndex: 1,
        }, 0.4)
          .fromTo(
            [outerWrappers[index], innerWrappers[index]],
            {
              yPercent: (i) => i ? -100 * dFactor : 100 * dFactor,
            },
            {
              yPercent: 0,
            },
            0.4,
          )
          .fromTo(
            splitHeadings[index].chars,
            {
              autoAlpha: 0,
              y: 100 * dFactor,
              rotation: 20 * dFactor,
            },
            {
              autoAlpha: 1,
              y: 0,
              rotation: 0,
              stagger: 0.03,
              duration: 0.6,
              ease: "back.out",
            },
            0.6,
          );

        currentIndex.current = index;
      };

      // Configurar Observer
      Observer.create({
        target: window,
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        onDown: () =>
          !animating.current && gotoSection(currentIndex.current - 1, -1),
        onUp: () =>
          !animating.current && gotoSection(currentIndex.current + 1, 1),
        tolerance: 10,
        preventDefault: true,
      });

      // Iniciar con la primera sección
      gotoSection(0, 1);
    };

    // Pequeño retraso para asegurar que el DOM está listo
    const timeout = setTimeout(initAnimation, 50);
    return () => clearTimeout(timeout);
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <header className="fixed top-0 left-0 w-full z-50 p-4 bg-black/80 text-white flex justify-between">
        <a href="https://github.com/UGALDEMMJ" className="font-bold">Developed by UGALDEMMJ</a>
        <div className="text-sm opacity-80">Scroll to navigate</div>
      </header>

      {texts.map((item, index) => {
        const colors = {
          ...defaultColors,
          ...(item.colors || {}),
        };
        const renderContent = () => (
          <div
            className={`section-heading text-4xl md:text-6xl font-bold ${colors.text} w-fit`}
          >
            {item.text}
          </div>
        );

        return (
          <section
            key={index}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          >
            <div
              className={`outer w-full h-full flex items-center justify-center`}
            >
              <div
                className={`inner w-full max-w-4xl px-8 py-12 rounded-xl border-2`}
              >
                {item.link
                  ? (
                    <Link to={item.link}>
                      {renderContent()}
                    </Link>
                  )
                  : (
                    renderContent()
                  )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Welcome;
