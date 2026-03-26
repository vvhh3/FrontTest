import React from 'react';
import { Link } from 'react-router-dom';
import { useBearStore } from '../zustand/useBearStore';


const Home = () => {

    const GetBear = () => {
        const bear = useBearStore((state) => state.bears)
        return <h1>Bear:{bear}</h1>
    }

    return (
        <div>
            <div className="bg-black text-white p-4 dark:bg-white dark:text-black ">
                TEST
            </div>
            <div className='bg-black w-20 m-2 dark:border-zinc-600 dark:w-20 dark:m-2  dark:bg-white'>
                <Link to="/" className="no-underline text-white p-4 transition-colors  dark:text-black duration-300 hover:text-red-600">Home</Link>
            </div>
            <div className='bg-black w-20 m-2 dark:border-zinc-600 dark:w-20 dark:m-2  dark:bg-white'>
                <Link to="/Zustand" className="no-underline text-white p-4 transition-colors duration-300  dark:text-black hover:text-red-600">Zustand</Link>
            </div>
            <div className='bg-black w-20 m-2 dark:border-zinc-600 dark:w-20 dark:m-2  dark:bg-white'>
                <Link to="/RTK" className="no-underline text-white p-4 transition-colors duration-300 dark:text-black hover:text-red-600">RTK</Link>
            </div>
            <div className='bg-black  w-20 m-2 dark:border-zinc-600 dark:w-20 dark:m-2  dark:bg-white'>
                <Link to="/Redis" className="no-underline text-white p-4 transition-colors  dark:text-black duration-300 hover:text-red-600">Front</Link>
            </div>
            <div className='bg-black w-20 m-2 dark:border-zinc-600 dark:w-20 dark:m-2  dark:bg-white'>
                <Link to="/JWT" className="no-underline text-white p-4 transition-colors duration-300 dark:text-black hover:text-red-600">JWT</Link>
            </div>
            <div className='bg-black w-20 m-2 dark:border-zinc-600 dark:w-20 dark:m-2  dark:bg-white '>
                <Link to="/Ref" className="no-underline text-white p-4 transition-colors duration-300 dark:text-black hover:text-red-600">Ref</Link>
            </div>
        </div>
    );
}

export default Home;
