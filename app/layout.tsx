import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import SessionProvider from '@/components/SessionProvider'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import Login from '@/components/Login'
import ClientProvider from '@/components/ClientProvider'

export const metadata = {
    title: 'ChatGPT Image Generator',
    description: 'Image Generator powered by ChatGPT and NextJS',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession(authOptions)

    return (
        <html lang="en">
            <body className="flex bg-[#343541]">
                <SessionProvider session={session}>
                    {!session ? (
                        <Login />
                    ) : (
                        <>
                            <Navbar />

                            <ClientProvider />

                            {children}
                        </>
                    )}
                </SessionProvider>
            </body>
        </html>
    )
}
