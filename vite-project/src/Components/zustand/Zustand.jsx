import React from 'react';
import { useBearStore } from './useBearStore';
import { Link } from 'react-router-dom';

const Zustand = () => {
    function BearCounter() {
        const bears = useBearStore((state) => state.bears)
        return <h1>bears: {bears}</h1>
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
            <div className='bg-red-500 text-white text-[20px] p-4'>
                Zustand
            </div>
            <div className='bg-gray-300 w-20 mb-2 mt-2'>
                <Link to="/" className="no-underline text-gray-900 p-4 transition-colors duration-300 hover:text-blue-600">Home</Link>
            </div>
            <p></p>
            <Controls />
            <BearCounter />
        </div>
    );
}

export default Zustand;
