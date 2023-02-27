import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBRVVNXxYbCM978_taLyOEQyfWwItpq8TQ",
  authDomain: "panelinha-296b3.firebaseapp.com",
  projectId: "panelinha-296b3",
  storageBucket: "panelinha-296b3.appspot.com",
  messagingSenderId: "1044056199602",
  appId: "1:1044056199602:web:717f489f60b9a8e59214ab"
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }