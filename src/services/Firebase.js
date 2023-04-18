import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC3FItUPfV39hAlvMdajajwB_5t6njOVgo",
    authDomain: "reactjs-coderhouse-4c952.firebaseapp.com",
    projectId: "reactjs-coderhouse-4c952",
    storageBucket: "reactjs-coderhouse-4c952.appspot.com",
    messagingSenderId: "931949565748",
    appId: "1:931949565748:web:3cdc88eda6ee098353f761"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)