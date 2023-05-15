import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyArWDHUbWoQECfL_Min5Z81ACYsKTOsI40",
  authDomain: "ecommerce-reactjs-4c7fe.firebaseapp.com",
  projectId: "ecommerce-reactjs-4c7fe",
  storageBucket: "ecommerce-reactjs-4c7fe.appspot.com",
  messagingSenderId: "347259632994",
  appId: "1:347259632994:web:40736a4d5f35961866803b",
  measurementId: "G-CC3LV0Z39F"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)