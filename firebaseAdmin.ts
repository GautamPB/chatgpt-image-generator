import admin from 'firebase-admin'
import { getApps } from 'firebase/app'

const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
)

if (getApps().length === 0) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    })
}

const adminDb = admin.firestore()

export { adminDb }
