// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSLBykaVdntnK2XZt4fvUcMa6q168qHfk",
  authDomain: "jira-53b3e.firebaseapp.com",
  projectId: "jira-53b3e",
  storageBucket: "jira-53b3e.firebasestorage.app",
  messagingSenderId: "699650977813",
  appId: "1:699650977813:web:8e4236ec34331645259e1c",
  measurementId: "G-TNRX1H5792"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, db};