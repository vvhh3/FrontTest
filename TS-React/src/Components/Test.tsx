import React, { memo, useState } from "react"

interface TestProps {
    title: string
    onClick: () => void
    count: number
}

const Test = ({ title, onClick, count }: TestProps) => {
    const [style,setStyle] = useState({})

    const Click = (e: React.MouseEvent<HTMLButtonElement>) => {
        const react = e.currentTarget.getBoundingClientRect()

        const x = e.clientX - react.left
        const y = e.clientY - react.top

        setStyle({
            background: `radial-gradient(circle 20px at ${x}px ${y}px, black, orange)`
        })
        console.log("X:", e.clientX, "Y:", e.clientY)
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>count: {count}</p>
            <button onClick={onClick}>
                Click me
            </button>

            <button onClick={Click} 
            style={style}
            className="w-64 h-32 text-white rounded-xl">
                Click
            </button>
        </div>

    )
}

export default memo(Test)