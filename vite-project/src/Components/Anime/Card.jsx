import { useEffect, useRef } from "react";
import { animate, createScope, stagger } from "animejs";

export default function Card() {
  const rootRef = useRef(null);
  const scopeRef = useRef(null);

  useEffect(() => {
    scopeRef.current = createScope({ root: rootRef }).add(() => {

      animate(".hero-title", {
        y: [40, 0],
        opacity: [0, 1],
        duration: 900,
        ease: "outQuad",
      });

      animate(".hero-subtitle", {
        y: [25, 0],
        opacity: [0, 1],
        delay: 250,
        duration: 800,
        ease: "outQuad",
      });

      animate(".hero-btn", {
        y: [20, 0],
        opacity: [0, 1],
        delay: stagger(150),
        duration: 700,
        ease: "outQuad",
      });

      animate(".project-card", {
        y: [50, 0],
        opacity: [0, 1],
        scale: [0.5, 1], // увеличение до нормального размера
        delay: stagger(120),
        duration: 700,
        ease: "outQuad",
      });

      animate(".tech-badge", {
        scale: [0.7, 1],
        opacity: [0, 1],
        delay: stagger(80),
        duration: 500,
        ease: "outElastic", // эффект пружины
      });
    });

    return () => scopeRef.current.revert();
  }, []);

  return (
    <section ref={rootRef} className="min-h-screen bg-[#0b0f19] text-white px-8 py-20 overflow-hidden relative">

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="hero-title opacity-0 text-5xl font-bold mb-6">
          Frontend Developer
        </h1>

        <p className="hero-subtitle opacity-0 text-xl text-white/70 max-w-2xl mb-8">
          React, TypeScript, Web3, dashboards, API integrations and modern UI.
        </p>

        <div className="flex gap-4 mb-14">
          <button className="hero-btn opacity-0 px-6 py-3 rounded-xl bg-white text-black">
            Смотреть проекты
          </button>
          <button className="hero-btn opacity-0 px-6 py-3 rounded-xl border border-white/20">
            Связаться
          </button>
        </div>

        <div className="flex gap-3 mb-10 flex-wrap">
          {["React", "TypeScript", "Redux", "Tailwind", "Web3", "Docker"].map((tech) => (
            <span key={tech} className="tech-badge opacity-0 px-4 py-2 rounded-full bg-white/10">
              {tech}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {["DeFi Dashboard", "Weather API App", "Telegram Moderation Bot"].map((project) => (
            <div key={project} className="project-card opacity-0 p-6 rounded-2xl bg-white/10 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">{project}</h3>
              <p className="text-white/60">
                UI, API, state management and business logic.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}