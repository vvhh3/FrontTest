import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { plusBear, minusBear, removeAllBear } from '../ReduxToolKit/bearSlice';
import { plusFish, minusFish, removeAllFish } from './fishSlice';

import NavButton from '../Home/NavButton';
import { House} from 'lucide-react'
import Title from '../Home/Title';
const ReduxTk = () => {
    const bears = useSelector((state) => state.bear.bears);
    const fish = useSelector((state) => state.fish.fish);
    const dispatch = useDispatch();

    return (
        <div>
            <Title name={"Redux ToolKit"}/>
            <NavButton title={'Home'} path={'/'} icon={<House />} />

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
