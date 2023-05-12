'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'
import { useSession } from 'next-auth/react'

type Props = {
    chatId: string
}

const ChatComponent = ({ chatId }: Props) => {
    const [activeChat, setActiveChat] = useState(false)

    const router = useRouter()

    const pathname = usePathname()

    const { data: session } = useSession()

    useEffect(() => {
        if (!pathname) return

        setActiveChat(pathname.includes(chatId))
    }, [pathname, router])

    const handleDeleteChat = async () => {
        await deleteDoc(
            doc(db, 'users', session?.user?.email!, 'chats', chatId)
        )
        router.replace('/')
    }

    return (
        <div
            className={`chatRow group ${activeChat && 'activeChatRow'}`}
            onClick={() => router.push(`/chat/${chatId}`)}
        >
            <div className="flex items-center flex-1 space-x-4">
                <ChatBubbleLeftIcon className="h-5 w-5" />
                <p className="hidden md:block">New Chat</p>
            </div>

            <div
                className="group-hover:block hidden"
                onClick={handleDeleteChat}
            >
                <TrashIcon className="h-5 w-5 text-red-500" />
            </div>
        </div>
    )
}

export default ChatComponent
