import React, { useState } from 'react'
import Input from './Input'
import axios from 'axios'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from "rehype-highlight"


export default function Chat() {
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState([])
    const [model, setModel] = useState("")

    const sendMessage = async () => {
        try {
            setIsLoading(true)
            console.log("input:", input)
            const res = await axios.post("http://localhost:5000/api/chat", {
                message: input,
                model: model
            })
            setResponse([...response, res.data.answer])
            setIsLoading(false)
            console.log(res.data)
            setInput("")
        } catch (e) {
            console.log(e)
            setIsLoading(false)
        }
    }
    // node ./src/Components/AI/server.js
    return (
        <div className='flex min-h-[70vh]'>
            <div className='mt-auto flex-col flex w-full items-center justify-center'>

                {response && (
                    <div className='w-1/2'>

                        {response.map(r => (
                            <div key={r} className='text-white rounded-3xl bg-zinc-900 p-5'>
                                <h2>Мой Ответ:</h2>
                                <Markdown rehypePlugins={remarkGfm} rehypePlugins={[rehypeHighlight]}>{r}</Markdown>
                            </div>
                        ))}


                        {isLoading && <div >Думаю...</div>}
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
