import React, { useState } from 'react';
import NavButton from '../Home/NavButton';
import { House} from 'lucide-react'
import Title from '../Home/Title';
const EventAndSafe = () => {
    const [msg, setMsg] = useState([])
    const [input, setInput] = useState('')
    const [flag, setFlag] = useState(false)

    const handleClick = async (msg) => {
        setFlag(true)
        await new Promise(r => setTimeout(r, 2000))
        setMsg(prev => [...prev, { text: msg, id: Date.now() }])
        setFlag(false)
        alert("Сообщение отправлено!")
    }

    return (
        <div>
            <Title name={'Не придумал'}/>
            <NavButton title={'Home'} path={'/'} icon={<House />} />
            <p>Отправить сообщение</p>
            <div className='flex'>
                <input value={input} placeholder='сообщение' onChange={(e) => setInput(e.target.value)} className='border m-2  p-2 w-30' />
                <div className={` transition-colors rounded-xl m-2 p-3 dark:border-zinc-600 dark:m-2 duration-400 ${flag ? 'bg-gray-500' : 'bg-black'} hover:bg-sky-400 dark:hover:bg-red-200  dark:bg-white`}>
                    <button onClick={() => handleClick(input)} disabled={flag} className={`no-underline flex justify-between p-1  text-white  transition-colors  dark:text-black duration-300 hover:text-white `}>
                        {flag ? 'Отправляем...' : " Отправить"}
                    </button>
                </div>
            </div>
            <p>История сообщений</p>

            {msg.map(p => (
                <div key={p.id} className='flex gap-5 m-1'>
                    <p>id:{p.id}</p>
                    <p>text:{p.text}</p>
                </div>
            ))}
        </div>
    );
}

export default EventAndSafe;
