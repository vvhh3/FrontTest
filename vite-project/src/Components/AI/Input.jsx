import React, { useEffect, useRef } from 'react'
import { ArrowUp } from 'lucide-react'

export default function Input({ input, setInput, onSend, isLoading }) {
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
    <div className="flex w-1/3 items-end gap-3 rounded-3xl border border-zinc-700 bg-zinc-900 px-4 py-3 shadow-lg shadow-black/20">
      <textarea 
        ref={textareaRef}
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        onKeyDown={handleKeyDown}
        rows={1}
        placeholder="Какой у вас вопрос?"
        className="max-h-[180px] min-h-10 flex-1 resize-none py-2 text-white outline-none placeholder:text-zinc-500"
      />
      <button
        onClick={onSend}
        disabled={isLoading || !input.trim()}
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
          isLoading || !input.trim()
            ? 'bg-zinc-700 text-zinc-500 cursor-not-allowed'
            : 'bg-white text-black hover:bg-zinc-200'
        }`}
      >
        <ArrowUp/>
      </button>
    </div>
  )
}
