import Link from "next/link"


export default function page() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="m-4 text-pink-400">About</h1>
            <Link href="/" className=" duration-500 hover:text-sky-500">Home</Link>
            <Link href="/Contract" className=" duration-500 hover:text-sky-500">contract</Link>
            <Link href="/Client" className=" duration-500 hover:text-sky-500">client</Link>
        </div>
    )
}