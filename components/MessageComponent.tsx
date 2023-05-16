'use client'

import { useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import HTMLFormElement from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/firebase'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'

type Props = {
    chatId: string
}

const MessageComponent = ({ chatId }: Props) => {
    const [prompt, setPrompt] = useState<string>('')

    const { data: session } = useSession()

    const handlePromptSubmit = async (
        e: HTMLFormElement.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()

        if (!prompt) {
            return
        }

        const input = prompt.trim()

        setPrompt('')

        const notification = toast.loading('ChatGPT is thinking...')

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image!,
            },
        }

        await addDoc(
            collection(
                db,
                'users',
                session?.user?.email!,
                'chats',
                chatId,
                'messages'
            ),
            message
        )

        await fetch('/api/askQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: input,
                chatId,
                session,
            }),
        })
            .then(() => {
                toast.success('ChatGPT has responded', {
                    id: notification,
                })
            })
            .catch((err) => {
                console.log('Error: ', err.message)
            })
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

            <button
                disabled={!prompt}
                type="submit"
                className="bg-[#12B48B] text-white py-2 disabled:bg-gray-100/40 transition-colors duration-300 disabled:cursor-not-allowed disabled:text-black px-4 rounded-lg"
            >
                <PaperAirplaneIcon className="h-6 w-6 -rotate-45" />
            </button>
        </form>
    )
}

export default MessageComponent
