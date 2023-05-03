'use client'

import { useSession } from 'next-auth/react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { signOut } from 'next-auth/react'
import { db } from '@/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const Navbar = () => {
    const { data: session } = useSession()

    const handleCreateNewChat = async () => {
        const doc = await addDoc(
            collection(db, 'users', session?.user?.email!, 'chats'),
            {
                userId: session?.user?.email!,
                createdAt: serverTimestamp(),
            }
        )

        console.log('created new chat')
    }

    return (
        <div className="p-3 bg-[#202123] md:w-[25%] w-[20%] h-screen flex flex-col justify-between items-center">
            <div className="flex flex-col items-center w-full">
                <button
                    onClick={handleCreateNewChat}
                    className="text-white w-full hover:bg-gray-100/10 transition-colors flex items-center space-x-4 cursor-pointer border border-gray-500/50 rounded-md py-3 px-4 font-semibold"
                >
                    <PlusIcon className="h-4 w-4" />
                    <h1 className="text-sm hidden md:block">New Chat</h1>
                </button>
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
