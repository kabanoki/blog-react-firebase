import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const API_KEY = process.env.REACT_APP_API_KEY;
const AUTH_Domain = process.env.REACT_APP_AUTH_Domain;
const PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
const STORAGE_BUKET = process.env.REACT_APP_STORAGE_BUKET;
const MESSAGING_SEND_ID = process.env.REACT_APP_MESSAGING_SEND_ID;
const APP_ID = process.env.REACT_APP_APP_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_Domain,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUKET,
  messagingSenderId: MESSAGING_SEND_ID,
  appId: APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };