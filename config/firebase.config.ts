// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA_GvYEqIt7haEc4N_Sk6_aXR3hMwIc-b8',
  authDomain: 'townesquare-2862b.firebaseapp.com',
  projectId: 'townesquare-2862b',
  storageBucket: 'townesquare-2862b.appspot.com',
  messagingSenderId: '524570695030',
  appId: '1:524570695030:web:f77aef9ef103f229fe1657',
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);
export { app, firestoreDB };
