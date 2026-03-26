import React from 'react';
import { useBearStore } from './useBearStore';
import { Link } from 'react-router-dom';

const Zustand = () => {
    function BearCounter() {
        const bears = useBearStore((state) => state.bears)
        return <h1 className='text-xl font-bold'>bears: {bears}</h1>
    }

    function Controls() {
        const removeAllBears = useBearStore((state) => state.removeAllBear)
        const plusBear = useBearStore((state) => state.plusBear)
        const minusBear = useBearStore((state) => state.minusBear)
        return (<>
            <button onClick={plusBear} className='m-1 bg-gray-300 p-1 duration-500 hover:bg-blue-400'>one up</button>
            <button onClick={minusBear} className='m-1 bg-gray-300 p-1 duration-500 hover:bg-blue-400'>one down</button>
            <button onClick={removeAllBears} className='m-1 bg-gray-300 p-1 duration-500 hover:bg-blue-400'>removeAllBears</button>
        </>)
    }
    
    return (
        <div>
            <div className="bg-black text-white p-4 dark:bg-white dark:text-black ">
                Zustand
            </div>
            <div className='bg-gray-300 w-20 mb-2 mt-2'>
                <Link to="/" className="no-underline text-gray-900 p-4 transition-colors duration-300 hover:text-blue-600">Home</Link>
            </div>
            <p></p>
            <Controls />
            <BearCounter />
            <div className=" grid w-1/5 grid-cols-3 gap-4 mt-4">
                <div className='flex bg-sky-300 justify-start'>01</div>
                <div className='flex justify-center bg-sky-300'>02</div>
                <div className='flex justify-end bg-sky-300'>03</div>
                <div className='flex justify-start bg-sky-300'>04</div>
                <div className='flex justify-center bg-sky-300'>05</div>
                <div className='flex justify-end bg-sky-300'>06</div>
            </div>
        </div>
    );
}

export default Zustand;
