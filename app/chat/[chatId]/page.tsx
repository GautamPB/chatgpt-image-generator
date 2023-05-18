'use client'

import { usePathname } from 'next/navigation'
import MessageComponent from '@/components/MessageComponent'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from 'firebase/firestore'
import { db } from '@/firebase'
import { useSession } from 'next-auth/react'
import Message from '@/components/Message'
import { useRef, useEffect } from 'react'

const ChatPage = () => {
    const pathname = usePathname()

    const chatId = pathname?.slice(6)!

    const { data: session } = useSession()

    const messegesEndRef = useRef<any>()

    const [messages, loading, error] = useCollection(
        session &&
            query(
                collection(
                    db,
                    'users',
                    session?.user?.email!,
                    'chats',
                    chatId,
                    'messages'
                ),
                orderBy('createdAt', 'asc')
            )
    )

    useEffect(() => {
        messegesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return (
        <div className="flex flex-col py-4 h-screen flex-1">
            {/* message area */}
            <div className="flex-1 overflow-y-scroll">
                {messages?.docs.length ? (
                    messages?.docs.map((message) => (
                        <Message key={message.id} message={message.data()} />
                    ))
                ) : (
                    <div className="flex items-center justify-center h-full text-white text-2xl font-bold">
                        Enter a prompt below to get started!
                    </div>
                )}
                <div ref={messegesEndRef} />
            </div>

            <MessageComponent chatId={chatId} />
        </div>
    )
}

export default ChatPage
