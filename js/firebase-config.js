import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu6sWmD_5tAwJcZ48J5cXvrcd1MGTwBD8",
  authDomain: "gandya-paid.firebaseapp.com",
  databaseURL: "https://gandya-paid-default-rtdb.firebaseio.com",
  projectId: "gandya-paid",
  storageBucket: "gandya-paid.firebasestorage.app",
  messagingSenderId: "687061891755",
  appId: "1:687061891755:web:25eb179c1018002545d5ee",
  measurementId: "G-4MRNYFYN41"
};

const app = initializeApp(firebaseConfig);

let analytics = null;
try {
    analytics = getAnalytics(app);
} catch (e) {
    analytics = null;
}

const db = getDatabase(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
