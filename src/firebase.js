import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBfat4afK3ZWgQ2k-htCvJCKhLCHmj3rwk",
  authDomain: "blog-react-firebase-8c5af.firebaseapp.com",
  projectId: "blog-react-firebase-8c5af",
  storageBucket: "blog-react-firebase-8c5af.appspot.com",
  messagingSenderId: "503203222184",
  appId: "1:503203222184:web:d91bd34c6fe6c1372a289d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };