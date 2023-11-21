import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDkTlyrJ9pqglAqup1pHJOEDuPw5bTJhog",
    authDomain: "akg-construction-69186.firebaseapp.com",
    databaseURL: "https://akg-construction-69186-default-rtdb.firebaseio.com",
    projectId: "akg-construction-69186",
    storageBucket: "akg-construction-69186.appspot.com",
    messagingSenderId: "1070074274832",
    appId: "1:1070074274832:web:3093ad706780fa5c221695",
    measurementId: "G-LJ9GXTW46V"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
