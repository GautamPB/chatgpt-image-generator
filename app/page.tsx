import {
    SunIcon,
    BoltIcon,
    ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'

export default function Home() {
    return (
        <main className="flex items-center flex-col lg:justify-center flex-1 p-8 overflow-y-scroll h-screen">
            <h1 className="text-white font-bold text-3xl mb-10">ChatGPT</h1>

            <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-center lg:items-start justify-center space-x-4">
                <div className="text-white flex flex-col space-y-4 text-center">
                    <div className="flex flex-col items-center">
                        <SunIcon className="w-8 h-8" />
                        <h1>Examples</h1>
                    </div>

                    <div className="space-y-4">
                        <div className="feature">
                            Explain Quantum computing in simple terms
                        </div>
                        <div className="feature">
                            Got any creative ideas for a 10 year olds birthday?
                        </div>
                        <div className="feature">
                            How do I make a HTTP request in Javascript?
                        </div>
                    </div>
                </div>

                <div className="text-white flex space-y-4 flex-col text-center">
                    <div className="flex flex-col items-center">
                        <BoltIcon className="w-8 h-8" />
                        <h1>Capabilities</h1>
                    </div>

                    <div className="space-y-4">
                        <div className="feature">
                            Trained to decline inappropriate requests
                        </div>
                        <div className="feature">
                            Messages are stored in Firebase Firestore
                        </div>
                        <div className="feature">
                            Generate links to different images
                        </div>
                    </div>
                </div>

                <div className="text-white space-y-4 flex flex-col text-center">
                    <div className="flex flex-col items-center">
                        <ExclamationTriangleIcon className="w-8 h-8" />
                        <h1>Limitations</h1>
                    </div>

                    <div className="space-y-4">
                        <div className="feature">
                            May occasionally generate incorrect information
                        </div>
                        <div className="feature">
                            May occasionally produce harmful instructions or
                            biased content
                        </div>
                        <div className="feature">
                            Image links and chats expire after an hour
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
