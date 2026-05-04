import React, { useState } from 'react'
import NavButton from '../Home/NavButton'
import Title from '../Home/Title'
import { House } from 'lucide-react'
import axios from 'axios'


const AI = () => {
    const [input, setInput] = useState('')
    const [response, setResponse] = useState('')

    const sendMessage = async () => {
        try {
            console.log("input", input)
            const res = await axios.post("http://localhost:5000/api/chat", {
                message: input
            })
            console.log("res", res)

            const data = res.data
// как сделать контекст чата , если я использую api openrouter , backend: nodeJs
            setResponse(data.answer)
            console.log(data.answer)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <Title name={"AI"} />
            <NavButton title={'Home'} path={'/'} icon={<House />} />
            <div className='flex flex-col justify-center'>

                <input value={input} onChange={(e) => setInput(e.target.value)} className='border border-black w-1/2' />
                <button onClick={sendMessage} className='bg-gray-400 hover:bg-gray-600 duration-400 rounded-2xl'>Send</button>

                <p>Ответ: {response}</p>
            </div>
        </div>
    )
}
export default AI