import { animate, stagger } from "animejs"
import Title from "../Home/Title"
import { House } from "lucide-react"
import NavButton from "../Home/NavButton"
import { useEffect, useRef } from "react";

const Anime = () => {

    const containerRef = useRef(null);

    useEffect(() => {
        animate(containerRef.current.querySelectorAll(".card"), {
            y: [40, 0],
            // движение по оси Y (снизу вверх)
            // 40 → старт (ниже), 0 → финальная позиция
            opacity: [0, 1],
            // прозрачность
            // 0 → полностью скрыт, 1 → полностью виден
            delay: stagger(150), // делает появление элемнетов по очереди
            // каждая следующая карточка появляется позже на 150мс
            duration: 700,
            // длительность анимации (в миллисекундах)
            loop: 0, // сколько раз повторяется анимация, либо true - бесконечно
            ease: "linear", //Популярные: "linear" — ровно ,"inQuad" — разгон , "outQuad" — торможение, "inOutQuad" — плавно туда-сюда ,"outElastic" — пружина
            // direction: "alternate",
            // направление анимации
            // "normal" — обычное
            // "reverse" — в обратную сторону
            // "alternate" — туда-обратно
            begin: () => {
                console.log("анимация началась");
            },
            // вызывается в начале анимации

            complete: () => {
                console.log("анимация закончилась");
            },
            // вызывается в конце анимации
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