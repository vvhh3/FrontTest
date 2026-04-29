import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBearStore } from '../zustand/useBearStore';
import {
    House,
    DatabaseZap,
    Package,
    HardDrive,
    Braces,
    Cookie,
    CalendarCheck,
    Cloud,
    Layers,
    Dog
} from 'lucide-react'
import NavButton from './NavButton';

import Title from './Title';
import { set, text } from 'animejs';

const Home = () => {
    const [todos, setTodos] = useState([])
    const [inp, setInp] = useState('')

    const [isEdit, setIsEdit] = useState(true)
    const [idEdit, setIdEdit] = useState(null)

    return (
        
        <div className="font-mono">

            <Title name={"Home"} />
            <nav className='text-xl flex flex-col items-center justify-center'>
                <div className='w-1/2'>
                    <NavButton title={'Zustand'} path={'/Zustand'} icon={<DatabaseZap />} />
                    <NavButton title={'RTK'} path={'/RTK'} icon={<Package />} />
                    <NavButton title={'Redis'} path={'/Redis'} icon={<HardDrive />} />
                    <NavButton title={'JWT'} path={'/JWT'} icon={<Braces />} />
                    <NavButton title={'Ref'} path={'/Ref'} icon={<Cookie />} />
                    <NavButton title={'EventAndSafe'} path={'/EventAndSafe'} icon={<CalendarCheck />} />
                    <NavButton title={'Weather'} path={'/Weather'} icon={<Cloud />} />
                    <NavButton title={'TansTackQuery'} path={'/TansTackQuery'} icon={<Layers />} />
                    <NavButton title={'Anime'} path={'/Anime'} icon={<Dog />} />
                </div>
            </nav>
        </div>
    );
}

export default Home;
