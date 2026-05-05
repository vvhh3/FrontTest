import React, { useState } from 'react'
import Input from './Input'
import axios from 'axios'

export default function Chat() {
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState([])
    const [model,setModel] = useState("")

    const sendMessage = async () => {
        try {
            setIsLoading(true)
            const res = await axios.post("http://localhost:5000/api/chat", {
                message: input,
                model: model
            })
            setResponse([...response,res.data.answer])
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
            <div className='mt-auto flex-col flex w-full items-center justify-center'>

                {response && (
                    <div className='w-1/2'>
                        {response.map(r => (
                            <div className='m-3'>
                                <h2>Мой Ответ:</h2>
                                <p>{r}</p>
                            </div>
                        ))}

                    </div>
                )}

                <Input
                    input={input}
                    model={model}
                    setModel={setModel}
                    setInput={setInput}
                    onSend={sendMessage}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}
