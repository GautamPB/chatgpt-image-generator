'use client'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import MessageComponent from '@/components/MessageComponent'

const ChatPage = () => {
    const pathname = usePathname()

    const [chatId, setChatId] = useState('')

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

            <MessageComponent />
        </div>
    )
}

export default ChatPage
