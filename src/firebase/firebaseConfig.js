 import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDzRhfebJPoq2OesMx3RU9AQpNMXT9eyoE",
  authDomain: "collabshare-db408.firebaseapp.com",
  projectId: "collabshare-db408",
  storageBucket: "collabshare-db408.firebasestorage.app",
  messagingSenderId: "93159100072",
  appId: "1:93159100072:web:cff23054cc9f2522617c9d",
  measurementId: "G-J4YJ2XFEGC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);