import React, { useEffect, useRef } from 'react'
import { ArrowUp } from 'lucide-react'

export default function Input({ input, model, setModel, setInput, onSend, isLoading }) {
  const textareaRef = useRef(null)

  useEffect(() => {
    const textarea = textareaRef.current

    if (!textarea) return

    textarea.style.height = 'auto'
    textarea.style.height = `${Math.min(textarea.scrollHeight, 180)}px`
  }, [input])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSend()
    }
  }

  return (
    <div className="flex w-1/3 items-end gap-3 rounded-3xl border border-zinc-700 m-5 bg-zinc-900 px-4 py-3 shadow-lg shadow-black/20">
      <textarea
        ref={textareaRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
        placeholder="Какой у вас вопрос?"
        className="min-h-10 flex-1 resize-none py-2 text-white outline-none placeholder:text-zinc-500"
      />
      <button
        onClick={onSend}
        disabled={isLoading || !input.trim() || !model.trim()}
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${isLoading || !input.trim()
            ? 'bg-zinc-700 text-zinc-500 cursor-not-allowed'
            : 'bg-white text-black hover:bg-zinc-200'
          }`}
      >
        <ArrowUp />
      </button>
      <select value={model} onChange={(e) => setModel(e.target.value)}
        className='bg-white text-black hover:bg-zinc-200'
      >
        <option>Выберите модель</option>
        {/* <option value={"kwaivgi/kling-v3.0-pro"}>kwaivgi/kling-v3.0-pro</option> */}
        {/* <option value={"kwaivgi/kling-v3.0-std"}>kwaivgi/kling-v3.0-std</option> */}
        <option value={"openrouter/owl-alpha"}>openrouter/owl-alpha</option>
        <option value={"poolside/laguna-xs.2:free"}>poolside/laguna-xs.2:free</option>
        <option value={"poolside/laguna-m.1:free"}>poolside/laguna-m.1:free</option>
        {/* <option value={"google/veo-3.1-fast"}>google/veo-3.1-fast</option> */}
        {/* <option value={"google/veo-3.1-lite"}>google/veo-3.1-lite</option> */}
        <option value={"baidu/qianfan-ocr-fast:free"}>baidu/qianfan-ocr-fast:free</option>
        {/* <option value={"alibaba/wan-2.7"}>alibaba/wan-2.7</option> */}
        {/* <option value={"google/gemma-4-26b-a4b-it:free"}>google/gemma-4-26b-a4b-it:free</option> */}
        {/* <option value={"google/gemma-4-31b-it:free"}>google/gemma-4-31b-it:free</option> */}
        {/* <option value={"openai/sora-2-pro"}>openai/sora-2-pro</option> */}
      </select>
    </div>
  )
}
