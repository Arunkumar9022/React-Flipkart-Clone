import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRveTl_1vs6_M32gjnBY6pteVeZSqxSvk",
  authDomain: "flipkart-clone-be0e6.firebaseapp.com",
  projectId: "flipkart-clone-be0e6",
  storageBucket: "flipkart-clone-be0e6.appspot.com",
  messagingSenderId: "871252680898",
  appId: "1:871252680898:web:bc502a2749ab6b2f8d9b5b"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
