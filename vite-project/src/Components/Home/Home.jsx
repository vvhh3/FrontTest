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
            <div className="bg-red-500 text-white p-4 ">
                TEST
            </div>
            <div className='bg-gray-300 w-20 mb-2'>
                <Link to="/" className="no-underline text-gray-900 p-4 transition-colors duration-300 hover:text-blue-600">Home</Link>
            </div>
            {/* <GetBear /> */}
            <div className='bg-gray-300 w-20 mb-2'>
                <Link to="/Zustand" className="no-underline text-gray-900 p-4 transition-colors duration-300 hover:text-blue-600">Zustand</Link>
            </div>
            <div className='bg-gray-300 w-20 mb-2'>
                {/* Redux ToolKit */}
                <Link to="/RTK" className="no-underline text-gray-900 p-4 transition-colors duration-300 hover:text-blue-600">RTK</Link>
            </div>
            <div className='bg-gray-300 w-20 mb-2'>
                {/* Redux ToolKit */}
                <Link to="/Redis" className="no-underline text-gray-900 p-4 transition-colors duration-300 hover:text-blue-600">Front</Link>
            </div>
        </div>
    );
}

export default Home;
