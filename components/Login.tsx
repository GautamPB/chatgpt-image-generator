'use client'
import { signIn } from 'next-auth/react'

const Login = () => {
    return (
        <div className="h-screen w-full text-white flex flex-col space-y-4 items-center justify-center bg-[#12B48B]">
            <img
                className="w-[10rem] object-contain"
                src="https://static.vecteezy.com/system/resources/previews/021/059/825/original/chatgpt-logo-chat-gpt-icon-on-green-background-free-vector.jpg"
                alt="chatgpt-logo"
            />
            <h1
                onClick={() => signIn('google')}
                className="text-2xl font-bold cursor-pointer"
            >
                Login to use ChatGPT
            </h1>
        </div>
    )
}

export default Login
