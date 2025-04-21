// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCpDI3j6K_B26MpCMtt1KFrMntVTV3M6Q",
  authDomain: "ecs-react-2b703.firebaseapp.com",
  projectId: "ecs-react-2b703",
  storageBucket: "ecs-react-2b703.firebasestorage.app",
  messagingSenderId: "967690005580",
  appId: "1:967690005580:web:ad5579a2466572c6f618e9",
  measurementId: "G-QXSTM8PDJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();