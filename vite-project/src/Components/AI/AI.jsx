import React, { useState } from 'react'
import NavButton from '../Home/NavButton'
import Title from '../Home/Title'
import { House } from 'lucide-react'
import axios from 'axios'
import Chat from './Chat'

const AI = () => {
    return (
        <div>
            <Title name={"AI"} />
            <NavButton title={'Home'} path={'/'} icon={<House />} />
            <Chat />
        </div>
    )
}
export default AI