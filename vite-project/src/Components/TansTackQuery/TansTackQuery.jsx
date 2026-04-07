import React from 'react';
import Title from '../Home/Title';
import NavButton from '../Home/NavButton';
import { House } from 'lucide-react'
const TansTackQuery = () => {
    return (
        <div>
            <Title name={"Redux ToolKit"} />
            <NavButton title={'Home'} path={'/'} icon={<House />} />
            
        </div>
    );
}

export default TansTackQuery;
