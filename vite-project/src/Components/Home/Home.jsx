import React from 'react';
import { Link } from 'react-router-dom';
import { useBearStore } from '../zustand/useBearStore';
import { House, DatabaseZap, Package, HardDrive, Braces, Cookie,CalendarCheck } from 'lucide-react'
import NavButton from './NavButton';

import Title from './Title';
const Home = () => {

    const GetBear = () => {
        const bear = useBearStore((state) => state.bears)
        return <h1>Bear:{bear}</h1>
    }

    return (
        <div className="font-mono">
        <Title name={"Home"}/>
            <nav className='text-xl flex flex-col items-center justify-center'>
                <div className='w-1/2'>
                    <NavButton title={'Home'} path={'/'} icon={<House />} />
                    <NavButton title={'Zustand'} path={'/Zustand'} icon={<DatabaseZap/>}/>
                    <NavButton title={'RTK'} path={'/RTK'} icon={<Package/>}/>
                    <NavButton title={'Redis'} path={'/Redis'} icon={<HardDrive/>}/>
                    <NavButton title={'JWT'} path={'/JWT'} icon={<Braces/>}/>
                    <NavButton title={'Ref'} path={'/Ref'} icon={<Cookie/>}/>
                    <NavButton title={'EventAndSafe'} path={'/EventAndSafe'} icon={<CalendarCheck/>}/>
                    <NavButton title={'Weather'} path={'/Weather'} icon={<CalendarCheck/>}/>
                    <NavButton title={'TansTackQuery'} path={'/TansTackQuery'} icon={<CalendarCheck/>}/>
                </div>
            </nav>
        </div>
    );
}

export default Home;
