import React, { use, useEffect, useRef } from 'react'
import { ArrowUp, Bot } from 'lucide-react'
import { animate } from 'animejs'
export default function Input({ input, model, setModel, setInput, onSend, isLoading }) {
  const textareaRef = useRef(null)

  useEffect(() => {
    const textarea = textareaRef.current

    if (!textarea) return

    textarea.style.height = 'auto'
    textarea.style.height = `${Math.min(textarea.scrollHeight, 180)}px`

  }, [input])

  useEffect(() => {
    animate(".div-anime", {
      y: [-300, 0],
      scale: [0.5, 1],
      duration: 400,
      ease: "outQuad"
    })
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSend()
    }
  }

  return (
    <div className="div-anime m-5 flex w-1/2 items-end gap-3 rounded-3xl border border-zinc-700 bg-zinc-900 px-4 py-3 shadow-lg shadow-black/20">

      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:bg-zinc-700 hover:text-white">
        <Bot className='text-white' />
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="absolute w-full cursor-pointer opacity-0 bg-zinc-700 text-white"
          title="Выберите модель"
        >
          <option value="">Выберите модель</option>
          <option value="openrouter/owl-alpha">openrouter/owl-alpha</option>
          <option value="nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free">nvidia/nemotron-3</option>
          <option value="nvidia/nemotron-3-super-120b-a12b:free">nvidia/nemotron-3-super</option>
          <option value="poolside/laguna-xs.2:free">poolside/laguna-xs.2:free</option>
          <option value="poolside/laguna-m.1:free">poolside/laguna-m.1:free</option>
          <option value="baidu/qianfan-ocr-fast:free">baidu/qianfan-ocr-fast:free</option>
        </select>
      </div>

      <textarea
        ref={textareaRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
        placeholder="Какой вопрос сегодня?"
        className="flex-1 resize-none py-2 text-white outline-none placeholder:text-zinc-500"
      />

      <button
        type="button"
        onClick={onSend}
        disabled={isLoading || !input.trim() || !model.trim()}
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${isLoading || !input.trim() || !model.trim()
            ? 'bg-zinc-700 text-zinc-500 cursor-not-allowed'
            : 'bg-white text-black hover:bg-zinc-200'
          }`}
        aria-label="Send message"
      >
        <ArrowUp />
      </button>
    </div>
  )
}
