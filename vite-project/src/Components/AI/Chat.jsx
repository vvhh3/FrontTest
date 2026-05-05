import React, { useState } from 'react'
import Input from './Input'
import axios from 'axios'

export default function Chat() {
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState([])

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return

        try {
            setIsLoading(true)
            const res = await axios.post("http://localhost:5000/api/chat", {
                message: input
            })

            setResponse(res.data.answer)
            setIsLoading(false)
            console.log(res.data.answer)
            setInput("")
        } catch (e) {
            console.log(e)
            setIsLoading(false)
        }
    }

    return (
        <div className='flex min-h-[70vh]'>
            <div className='mt-auto flex w-full justify-center'>
                <Input
                    input={input}
                    setInput={setInput}
                    onSend={sendMessage}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}
