// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getDatabase} from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzAQteDuGjzkWbsfNSlASudflH1igUjcU",
  authDomain: "lista-de-linguagens-a64ee.firebaseapp.com",
  databaseURL: "https://lista-de-linguagens-a64ee-default-rtdb.firebaseio.com",
  projectId: "lista-de-linguagens-a64ee",
  storageBucket: "lista-de-linguagens-a64ee.appspot.com",
  messagingSenderId: "1033373290341",
  appId: "1:1033373290341:web:da410d67db93e72d5edb8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app); //Inicializa serviço realtime database

export {db}; //exporta o objeto do realtime database