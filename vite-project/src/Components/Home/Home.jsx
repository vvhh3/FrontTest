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
            <Link to="/">Home</Link>
            {/* <GetBear /> */}
            <p></p>
            <Link to="/Zustand">Zustand</Link>
            <p></p>
            <Link to="/RTK">Redux ToolKit</Link>
        </div>
    );
}

export default Home;
