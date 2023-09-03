// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQsim11WGXvUFSQ73tkqE3SwK18s4X5hw",
  authDomain: "swiftmart-67e70.firebaseapp.com",
  projectId: "swiftmart-67e70",
  storageBucket: "swiftmart-67e70.appspot.com",
  messagingSenderId: "838219800622",
  appId: "1:838219800622:web:2777770f915e7cce15bfbf",
  measurementId: "G-0LJ1ZH9HBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app