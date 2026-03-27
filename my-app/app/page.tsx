import Image from "next/image";
import Link from "next/link"
export default function Home() {
  return (
    <div className="flex flex-col  flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1  className="m-4 text-pink-400">Home</h1>
        <Link href="/about" className=" duration-500 hover:text-sky-500">about</Link>
        <Link href="/Contract" className=" duration-500 hover:text-sky-500" >contract</Link>
        <Link href="/Client" className=" duration-500 hover:text-sky-500" >client</Link>
    </div>
  );
}
