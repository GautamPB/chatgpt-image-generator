import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import SessionProvider from '@/components/SessionProvider'
import { authOptions } from './api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'

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
            <body>
                <SessionProvider session={session}>
                    {/* Navbar */}
                    <Navbar />

                    {children}
                </SessionProvider>
            </body>
        </html>
    )
}
