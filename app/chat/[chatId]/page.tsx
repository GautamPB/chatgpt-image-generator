'use client'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const ChatPage = () => {
    const pathname = usePathname()

    const [chatId, setChatId] = useState('')

    useEffect(() => {
        if (!pathname) return
        setChatId(pathname?.slice(6)!)
    }, [pathname])

    return <div>Chat ID: {chatId}</div>
}

export default ChatPage
