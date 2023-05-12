// function to pass prompt to ChatGPT and get image URLs
import openai from '@/lib/chatgpt'

const query = async (prompt: string) => {
    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: '512x512',
    })

    return response['data'].data[0].url
}

export default query
