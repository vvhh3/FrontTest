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
                <h1 className="hero-title  text-5xl font-bold mb-6">
                    Frontend Developer
                </h1>

                <p className="hero-subtitle text-xl text-white/70 max-w-2xl mb-8">
                    React, TypeScript, Web3, dashboards, API
                </p>

                <div className="flex gap-4 mb-14">
                    <a href="https://github.com/vvhh3?tab=overview&from=2026-04-01&to=2026-04-26" target="_blank">
                        <button className="hero-btn cursor-pointer px-6 py-3 rounded-xl bg-white text-black">
                            Смотреть проекты
                        </button>
                    </a>
                    <a href="https://t.me/ia_botik" target="_blank">
                        <button className="hero-btn px-6 py-3 rounded-xl border border-white/20 cursor-pointer">
                            Связаться
                        </button>
                    </a>
                </div>

                <div className="flex gap-3 mb-10 flex-wrap">
                    {["React", "TypeScript", "Redux", "Tailwind", "Web3", "Docker"].map((t) => (
                        <span key={t} className="tech-badge px-4  py-2 rounded-full bg-white/10">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {["DeFi Dashboard", "Weather API App", "Telegram Bot"].map((p) => (
                        <div key={p} className="project-card  p-6 rounded-2xl bg-white/10 border border-white/10">
                            <h3 className="text-xl d mb-3">{p}</h3>
                            <p className="text-white/60">
                                крутой текст тут
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}