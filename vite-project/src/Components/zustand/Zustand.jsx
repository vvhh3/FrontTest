import React from 'react';
import { useBearStore } from './useBearStore';
import { Link } from 'react-router-dom';
import { House } from 'lucide-react'
import NavButton from '../Home/NavButton';
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
            <NavButton title={'Home'} path={'/'} icon={<House />} />
            <Controls />
            <BearCounter />

            <div className=" grid w-1/5 grid-cols-3 gap-4 mt-4">
                <div className='flex bg-sky-300 justify-center'>01</div>
                <div className='flex justify-center bg-sky-300'>02</div>
                <div className='flex justify-center bg-sky-300'>03</div>
                <div className='flex justify-center bg-sky-300'>04</div>
                <div className='flex justify-center bg-sky-300'>05</div>
                <div className='flex justify-center bg-sky-300'>06</div>
            </div>
        </div>
    );
}

export default Zustand;
