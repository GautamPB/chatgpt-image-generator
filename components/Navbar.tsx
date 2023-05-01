'use client'

import Image from 'next/image'
import { useSession } from 'next-auth/react'

const Navbar = () => {
    const { data: session } = useSession()

    console.log(session)

    return (
        <div className="px-8 py-6 bg-white w-full z-50 shadow-md justify-between flex items-center">
            <div className="flex items-center space-x-4 font-bold">
                <Image
                    src="https://assets.stickpng.com/thumbs/63c52af590250dd34bd6a9ab.png"
                    alt=""
                    width={30}
                    height={30}
                />
                <h1>
                    ChatGPT{' '}
                    <span className="text-[#1778f2]">Image Generator</span>
                </h1>
            </div>

            <div>
                <h1>User Profile</h1>
            </div>
        </div>
    )
}

export default Navbar
