import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC1v6E3AnIhTl-vuO0GW_t403-p-Jedntk",
    authDomain: "ecommerce-db-65fbb.firebaseapp.com",
    projectId: "ecommerce-db-65fbb",
    storageBucket: "ecommerce-db-65fbb.firebasestorage.app",
    messagingSenderId: "616685511211",
    appId: "1:616685511211:web:7ee5b59e3452f9510b006e"
};

export const app = initializeApp(firebaseConfig);