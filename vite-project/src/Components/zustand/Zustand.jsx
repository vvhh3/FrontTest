import React from 'react';
import { useBearStore } from './useBearStore';
import { Link } from 'react-router-dom';

const Zustand = () => {
    function BearCounter() {
        const bears = useBearStore((state) => state.bears)
        return <h1>{bears} bears around here...</h1>
    }

    function Controls() {
        const removeAllBears = useBearStore((state) => state.removeAllBear)
        const plusBear = useBearStore((state) => state.plusBear)
        const minusBear = useBearStore((state) => state.minusBear)
        return (<>
            <button onClick={plusBear}>one up</button>
            <button onClick={minusBear}>one down</button>
            <button onClick={removeAllBears}>removeAllBears</button>
        </>)
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <p></p>
            <Controls/>
            <BearCounter />
        </div>
    );
}

export default Zustand;
