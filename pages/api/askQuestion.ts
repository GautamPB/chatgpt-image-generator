import { NextApiRequest, NextApiResponse } from 'next'
import query from './queryApi'

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
    }

    const response = await query(prompt)

    console.log(response)

    res.status(200).json({
        imageLink: response
            ? response
            : 'ChatGPT was unable to find an answer for that',
    })
}
