"use client"
import { useState } from "react"
import Link from "next/link"

export default function Client() {
    const [count, setCount] = useState(0)

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-black">
            <h1 className="m-4 text-pink-400">Client</h1>
            <Link href="/" className=" duration-500 hover:text-sky-500">Home</Link>
            <Link href="/Contract" className=" duration-500 hover:text-sky-500">contract</Link>
            <Link href="/about" className=" duration-500 hover:text-sky-500">about</Link>
            
            <button onClick={() => setCount(count + 1)} className="bg-gray-400 cursor-pointer">
                Cliks: {count}
            </button>

            <Link href="/Client/User" className=" duration-500 hover:text-sky-500">User</Link>
        </div >
    )
}