import { DocumentData } from 'firebase/firestore'

type Props = {
    message: DocumentData
}

const Message = ({ message }: Props) => {
    const isChatGPT = message.user._id === 'ChatGPT'

    return (
        <div className={`py-4 ${isChatGPT && 'bg-[#434654]'}`}>
            <div className="flex flex-start space-x-5 px-10 max-w-2xl mx-auto">
                <img src={message?.user?.avatar} alt="" className="h-8 w-8" />
                {!isChatGPT ? (
                    <h1 className="text-white">{message.text}</h1>
                ) : (
                    <img src={message?.text} alt="" />
                )}
            </div>
        </div>
    )
}

export default Message
