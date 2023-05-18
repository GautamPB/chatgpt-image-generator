import { NextApiRequest, NextApiResponse } from 'next'
import query from './queryApi'
import admin from 'firebase-admin'
import { adminDb } from '@/firebaseAdmin'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { prompt, chatId, session } = req.body

    if (!prompt) {
        res.status(400).json({ answer: 'Please provide a prompt!' })
        return
    } else if (!chatId) {
        res.status(400).json({ answer: 'Please provide a ChatID' })
        return
    }

    const response = await query(prompt)

    const message: Message = {
        text: response || 'ChatGPT was unable to find an answer for that',
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: 'ChatGPT',
            name: 'ChatGPT',
            avatar: 'https://links.papareact.com/89k',
        },
    }

    await adminDb
        .collection('users')
        .doc(session?.user?.email)
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .add(message)

    res.status(200).json({
        imageLink: response,
    })
}
