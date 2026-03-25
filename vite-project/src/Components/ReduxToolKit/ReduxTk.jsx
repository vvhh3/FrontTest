import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { plusBear, minusBear, removeAllBear } from '../ReduxToolKit/bearSlice';
import { plusFish, minusFish, removeAllFish } from './fishSlice';
import { Link } from 'react-router-dom';
const ReduxTk = () => {
    const bears = useSelector((state) => state.bear.bears);
    const fish = useSelector((state) => state.fish.fish);
    const dispatch = useDispatch();

    return (
        <div>
            <div className='bg-red-500 text-white p-4'>
                Redux ToolKit
            </div>
            <div className='bg-gray-300 w-20 m-2'>
                <Link to="/" className="no-underline text-gray-900 p-4 transition-colors duration-300 hover:text-blue-600">Home</Link>
            </div>
            <h1 className='font-bold text-xl'>{bears} bears</h1>
            <h1 className='font-bold text-xl'>{fish} fish</h1>
            <h1 className='font-bold text-xl'>bear</h1>
            <button onClick={() => dispatch(plusBear())} className='m-1 bg-gray-300 box-border size-8 p-1 duration-500 hover:bg-blue-400'>+</button>
            <button onClick={() => dispatch(minusBear())} className='m-1 bg-gray-300  box-border size-8 p-1 duration-500 hover:bg-blue-400'>-</button>
            <button onClick={() => dispatch(removeAllBear())} className='m-1 bg-gray-300  box-border size-11 p-1 duration-500 hover:bg-blue-400'>
                reset
            </button>
            <h1 className='font-bold text-xl'>fish</h1>
            <button onClick={() => dispatch(plusFish())} className='m-1 bg-gray-300 p-1 box-border size-8 duration-500 hover:bg-sky-400'>+</button>
            <button onClick={() => dispatch(minusFish())} className='m-1 bg-gray-300 p-1  box-border size-8 duration-500 hover:bg-sky-400'>-</button>
            <button onClick={() => dispatch(removeAllFish())} className='m-1 bg-gray-300 box-border size-11 p-1 duration-500 hover:bg-sky-400'>
                reset
            </button>
        </div>
    );
}

export default ReduxTk;
