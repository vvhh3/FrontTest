import React from 'react';
import { Link } from 'react-router-dom';
import { useBearStore } from '../zustand/useBearStore';
import { House, DatabaseZap, Package, HardDrive, Braces, Cookie } from 'lucide-react'

const Home = () => {

    const GetBear = () => {
        const bear = useBearStore((state) => state.bears)
        return <h1>Bear:{bear}</h1>
    }

    return (
        <div class="font-mono">
            <div className='bg-black text-white p-4 dark:bg-white dark:text-black'>
                TEST
            </div>
            <div className='text-xl max-w-3xl'>
                <div className='bg-black  transition-colors rounded-xl m-2 p-4 dark:border-zinc-600 dark:m-2 hover:bg-red-950 dark:hover:bg-red-200  dark:bg-white'>
                    <Link to="/" className="no-underline text-white p-4 transition-colors  dark:text-black duration-300 hover:text-red-600 flex justify-between">
                        Home <House />
                    </Link>
                </div>
                <div className='bg-black  transition-colors rounded-xl m-2 p-4 dark:border-zinc-600 dark:m-2  hover:bg-red-950 dark:hover:bg-red-200 dark:bg-white'>
                    <Link to="/Zustand" className="no-underline text-white p-4 transition-colors duration-300  dark:text-black hover:text-red-600  flex justify-between">
                        Zustand <DatabaseZap />
                    </Link>
                </div>
                <div className='bg-black  transition-colors rounded-xl m-2 p-4 dark:border-zinc-600  dark:m-2  hover:bg-red-950 dark:hover:bg-red-200 dark:bg-white'>
                    <Link to="/RTK" className="no-underline text-white p-4 transition-colors duration-300 dark:text-black hover:text-red-600  flex justify-between">
                        RTK <Package />
                    </Link>
                </div>
                <div className='bg-black  transition-colors rounded-xl m-2 p-4 dark:border-zinc-600   dark:m-2  hover:bg-red-950 dark:hover:bg-red-200 dark:bg-white'>
                    <Link to="/Redis" className="no-underline text-white p-4 transition-colors  dark:text-black duration-300 hover:text-red-600  flex justify-between">
                        Front <HardDrive />
                    </Link>
                </div>
                <div className='bg-black  transition-colors rounded-xl m-2 p-4 dark:border-zinc-600 dark:m-2  hover:bg-red-950 dark:hover:bg-red-200 dark:bg-white'>
                    <Link to="/JWT" className="no-underline text-white p-4 transition-colors duration-300 dark:text-black hover:text-red-600  flex justify-between">
                        JWT <Braces />
                    </Link>
                </div>
                <div className='bg-black  transition-colors rounded-xl m-2 p-4 dark:border-zinc-600  dark:m-2  hover:bg-red-950 dark:hover:bg-red-200 dark:bg-white '>
                    <Link to="/Ref" className="no-underline text-white p-4 transition-colors duration-300 dark:text-black hover:text-red-600  flex justify-between">
                        Ref <Cookie />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
