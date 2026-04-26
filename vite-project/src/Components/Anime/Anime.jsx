import { animate,stagger } from "animejs"
import Title from "../Home/Title"
import { House } from "lucide-react"
import NavButton from "../Home/NavButton"
import { useEffect, useRef } from "react";

const Anime = () => {

    const containerRef = useRef(null);

    useEffect(() => {
        animate(containerRef.current.querySelectorAll(".card"), {
            y: [40, 0],
            opacity: [0, 1],
            delay: stagger(120),
            duration: 700,
            ease: "outQuad",
        });
    }, []);

    return (
        <>
            <Title name={"Anime"} />
            <NavButton title={'Home'} path={'/'} icon={<House />} />

            <div ref={containerRef}>
                <div className="card">Card 1</div>
                <div className="card">Card 2</div>
                <div className="card">Card 3</div>
            </div>
        </>
    )
}

export default Anime