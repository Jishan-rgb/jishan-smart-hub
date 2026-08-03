import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCkUn9RaXeBLUQjemd8mcknew9smmRAAGQ",
  authDomain: "jishan-c196b.firebaseapp.com",
  projectId: "jishan-c196b",
  storageBucket: "jishan-c196b.firebasestorage.app",
  messagingSenderId: "189965569327",
  appId: "1:189965569327:web:f94f792e0c9d7a368be5da"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
