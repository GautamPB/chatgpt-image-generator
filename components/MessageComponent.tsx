'use client'
import { useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import HTMLFormElement from 'react'

const MessageComponent = () => {
    const [prompt, setPrompt] = useState<string>('')

    const handlePromptSubmit = (
        e: HTMLFormElement.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()
        console.log('Prompt: ', prompt)
        setPrompt('')
    }

    return (
        <form
            onSubmit={handlePromptSubmit}
            className="flex items-center w-full space-x-4"
        >
            <input
                type="text"
                value={prompt}
                onChange={(e: any) => setPrompt(e.target.value)}
                className="flex-1 py-2 rounded-lg outline-none border-none text-white bg-gray-500/40 px-4"
                placeholder="Enter a prompt here..."
            />

            <button type="submit">
                <PaperAirplaneIcon className="h-6 w-6 -rotate-45 text-white" />
            </button>
        </form>
    )
}

export default MessageComponent
