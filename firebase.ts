import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAbJ53JTpYXMpmz7HJQS2Rzh7vVIN-ysrU',
    authDomain: 'chatgpt-image-generator-d5cfc.firebaseapp.com',
    projectId: 'chatgpt-image-generator-d5cfc',
    storageBucket: 'chatgpt-image-generator-d5cfc.appspot.com',
    messagingSenderId: '834571497217',
    appId: '1:834571497217:web:d98825a0917a75ca86b500',
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
