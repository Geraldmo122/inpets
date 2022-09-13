import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

 
const firebaseConfig = {
  apiKey: "AIzaSyCvlg0nw-RXUEhJo-ZzEDfMQyJO_2Thss0",
  authDomain: "inpetssa.firebaseapp.com",
  projectId: "inpetssa",
  storageBucket: "inpetssa.appspot.com",
  messagingSenderId: "997739877948",
  appId: "1:997739877948:web:af964b9ba77322ce179539"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore( initFirebase);