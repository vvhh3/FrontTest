
import { motion } from 'framer-motion'
import { useRef } from 'react'
const Motion = () => {

    const ref = useRef<HTMLButtonElement>(null)

    const variants = {
        init: { scale: 0, opacity: 0 },
        anim: { scale: 1, opacity: 1 }
    }

    return (
        <div>
            <label htmlFor="email">email</label>
            <input type="email" id="email" />
            <button onClick={() => ref.current?.focus()}>Открыть </button>
            
            <motion.p
                className="bg-red-500 rounded-xl w-25 h-25 text-white flex justify-center items-center m-10"
                animate={{
                    rotate: 360,
                    scale: [4, 3, 2, 1],
                }}
                transition={{ duration: 1 }}
            >Привет</motion.p>
            <motion.button
                ref={ref}
                variants={variants}
                initial={"init"}
                animate={"anim"}
                transition={{ duration: 1 }}
                className="bg-red-500 rounded-full w-25 h-25 text-white flex justify-center items-center m-10" />

            <motion.button
                variants={variants}
                initial={"init"}
                animate={"anim"}
                transition={{ duration: .5 }}
                whileHover={{ scale: .9 }}
                whileTap={{ scale: 1.2 }}
                onHoverStart={() => console.log('hover started!')}
                className="bg-red-500 rounded-full w-25 h-25 text-white flex justify-center items-center m-10" />

            {/* whileHover -  когда курсор мыши наводится на элемент */}
            {/* whileTap (или whilePress -   в момент касания / нажатия на элемент */}
            {/* whileDrag -  пока пользователь перетаскивает элемент */}
            {/* whileFocus -  когда элемент получает фокус */}
            {/* whileInView -  когда элемент попадает в область видимости окна браузера (при скролле) */}

            {/* Порядок приоритетов (от высшего к низшему):
            whileFocus (наивысший)
            whileDrag
            whileTap
            whileHover
            whileInView
            animate (обычная анимация, наименьший) */}


        </div>
    )
}

export default Motion