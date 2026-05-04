import React from 'react'
import NavButton from '../Home/NavButton'
import Title from '../Home/Title'
import { House } from 'lucide-react'
export const AI = () => {
    return (
        <div>
            <Title name={"AI"} />
            <NavButton title={'Home'} path={'/'} icon={<House />} />
        </div>
    )
}
