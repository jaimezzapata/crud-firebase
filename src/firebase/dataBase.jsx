import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBnC4vvZ-ua7ykEL3cMwymlXB_nb0GtMT4",
  authDomain: "crud-clientes-1326b.firebaseapp.com",
  projectId: "crud-clientes-1326b",
  storageBucket: "crud-clientes-1326b.appspot.com",
  messagingSenderId: "754628636187",
  appId: "1:754628636187:web:ede2de2e7e86085a74d2be"
};


const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)