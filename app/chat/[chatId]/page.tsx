'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import MessageComponent from '@/components/MessageComponent'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from 'firebase/firestore'
import { db } from '@/firebase'
import { useSession } from 'next-auth/react'

const ChatPage = () => {
    const pathname = usePathname()

    const [chatId, setChatId] = useState('')

    const { data: session } = useSession()

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
        if (!pathname) return
        setChatId(pathname?.slice(6)!)
    }, [pathname])

    return (
        <div className="flex flex-col p-4 h-screen flex-1">
            {/* message area */}
            <div className="flex-1 p-4 overflow-y-scroll">
                <h1>Sample Message</h1>
            </div>

            <MessageComponent chatId={chatId} />
        </div>
    )
}

export default ChatPage
