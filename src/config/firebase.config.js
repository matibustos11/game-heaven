import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCmy9ofXy-nN5wBL3k_URRD8uyyM6IgxOY",
  authDomain: "coder-react-gameheaven.firebaseapp.com",
  projectId: "coder-react-gameheaven",
  storageBucket: "coder-react-gameheaven.appspot.com",
  messagingSenderId: "808406382007",
  appId: "1:808406382007:web:7f8a2587ea5d95b9a02432"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);