'use client'

import { useSession } from 'next-auth/react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { signOut } from 'next-auth/react'
import { db } from '@/firebase'
import {
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy,
} from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import ChatComponent from './ChatComponent'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const { data: session } = useSession()

    const router = useRouter()

    const [chats, loading, error] = useCollection(
        session &&
            query(
                collection(db, 'users', session?.user?.email!, 'chats'),
                orderBy('createdAt', 'asc')
            )
    )

    const handleCreateNewChat = async () => {
        const doc = await addDoc(
            collection(db, 'users', session?.user?.email!, 'chats'),
            {
                userId: session?.user?.email!,
                createdAt: serverTimestamp(),
            }
        )

        router.push(`/chat/${doc.id}`)
    }

    return (
        <div className="p-3 bg-[#202123] w-[25%] h-screen flex flex-col justify-between items-center">
            <div className="flex flex-col items-center w-full">
                {/* create new chat button */}
                <button
                    onClick={handleCreateNewChat}
                    className="text-white w-full hover:bg-gray-100/10 transition-colors flex items-center space-x-4 cursor-pointer border border-gray-500/50 rounded-md py-3 px-4 font-semibold justify-center md:justify-start"
                >
                    <PlusIcon className="h-4 w-4" />
                    <h1 className="text-sm hidden md:block">New Chat</h1>
                </button>

                {/* chats */}
                <div className="w-full space-y-3 mt-6">
                    {chats?.docs.map((chat) => (
                        <>
                            <ChatComponent chatId={chat.id} key={chat.id} />
                        </>
                    ))}
                </div>
            </div>

            <div
                onClick={() => signOut()}
                className="text-white font-bold flex items-center space-x-3"
            >
                <img
                    src={session?.user?.image!}
                    className="w-12 h-12 rounded-full transition duration-300 cursor-pointer hover:opacity-50"
                />
                <h1 className="hidden xl:block">{session?.user?.name}</h1>
            </div>
        </div>
    )
}

export default Navbar
