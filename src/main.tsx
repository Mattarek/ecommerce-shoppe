import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {initializeApp} from 'firebase/app'
import {onAuthStateChanged, getAuth} from 'firebase/auth'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import './index.scss'

const firebaseConfig = {
  apiKey: import.meta.env.apiKey,
  authDomain: import.meta.env.authDomain,
  projectId: import.meta.env.projectId,
  storageBucket: import.meta.env.storageBucket,
  messagingSenderId: import.meta.env.messagingSenderId,
  appId: import.meta.env.appId,
  measurementId: import.meta.env.measurementId
}
const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const cartCol = collection(db, 'cart')
const snapshow = await getDocs(cartCol)

onAuthStateChanged(auth, user => {
  if (user !== null) {
    console.log('Logged in!')
  } else {
    console.log('No user')
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
