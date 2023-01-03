import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCLKa6dSRHd0OP44cIsOq00iBCtJpnVsM4",
  authDomain: "galery-app-1d535.firebaseapp.com",
  databaseURL: "https://galery-app-1d535-default-rtdb.firebaseio.com",
  projectId: "galery-app-1d535",
  storageBucket: "galery-app-1d535.appspot.com",
  messagingSenderId: "251765278924",
  appId: "1:251765278924:web:8c00fb1fd23b08a4b31a69"
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
