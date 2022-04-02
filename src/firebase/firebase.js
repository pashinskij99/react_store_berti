import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBV8KBvMKhI_PlxvXGf_NeFpC9sUd4RUvg",
    authDomain: "sobes-sait.firebaseapp.com",
    databaseURL: "https://sobes-sait-default-rtdb.firebaseio.com",
    projectId: "sobes-sait",
    storageBucket: "sobes-sait.appspot.com",
    messagingSenderId: "345407310348",
    appId: "1:345407310348:web:2f8dcc61671c119683fc29",
    measurementId: "G-TX141J1CRD"
}
export const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export default app


