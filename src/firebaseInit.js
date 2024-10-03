import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDM7qJNKu-v58X_2ZL4Jdekf0VT22xWh3M",
    authDomain: "photofolio-7143a.firebaseapp.com",
    projectId: "photofolio-7143a",
    storageBucket: "photofolio-7143a.appspot.com",
    messagingSenderId: "42965774035",
    appId: "1:42965774035:web:24696dce0d1fefd1ec6e26",
    measurementId: "G-Z4835C7Q53"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
