import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAD9jvOGR_LMu5JMkYBU52oIxX4m6cpd7E",
  authDomain: "noor-essence.firebaseapp.com",
  projectId: "noor-essence",
  storageBucket: "noor-essence.firebasestorage.app",
  messagingSenderId: "761137770547",
  appId: "1:761137770547:web:d9b2bfa275418304433346"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);