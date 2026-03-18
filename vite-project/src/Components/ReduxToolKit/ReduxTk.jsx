import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { plusBear, minusBear, removeAllBear } from '../ReduxToolKit/bearSlice';
import { plusFish,minusFish,removeAllFish } from './fishSlice';
const ReduxTk = () => {
    const bears = useSelector((state) => state.bear.bears);
    const fish = useSelector((state) => state.fish.fish);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{bears} bears</h1>
            <h1>{fish} fish</h1>
            <p>bear</p>
            <button onClick={() => dispatch(plusBear())}>+</button>
            <button onClick={() => dispatch(minusBear())}>-</button>
            <button onClick={() => dispatch(removeAllBear())}>
                reset
            </button>
            <p>fish</p>
            <button onClick={() => dispatch(plusFish())}>+</button>
            <button onClick={() => dispatch(minusFish())}>-</button>
            <button onClick={() => dispatch(removeAllFish())}>
                reset
            </button>
        </div>
    );
}

export default ReduxTk;
