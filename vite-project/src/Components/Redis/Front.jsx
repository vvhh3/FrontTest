import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
const Front = () => {
    const [value, setValue] = useState()
    const [input, setInput] = useState("")
    useEffect(() => {
        axios.get("http://localhost:5000/api/value")
            .then(res => setValue(res.data.value))
    }, [])

    const saveValue = async () => {
        await axios.post("http://localhost:5000/api/value", { value: input })
        setValue(input)
        setInput("")
    }
    const delValue = async () => {
        await axios.delete("http://localhost:5000/api/value")
        setValue('Пусто')
    }

    return (
        <div>
            <div className='bg-red-500 p-4 text-white'>
                Redis
            </div>
            <div className='bg-gray-300 w-20 m-2'>
                <Link to="/" className="no-underline text-gray-900 p-4 transition-colors duration-300 hover:text-blue-600">Home</Link>
            </div>
            <h1>React + Node + Redis</h1>
            <p>Сохранённое значение: <b>{value}</b></p>
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Введите что-то"
                className='border-1 border-cyan-600'
            />
            
            <button onClick={saveValue} className='bg-gray-300 p-1 ml-2'>Сохранить</button>
            <button onClick={delValue} className='bg-gray-300 p-1 ml-2'>Удалить</button>
        </div>
    );
}

export default Front;
