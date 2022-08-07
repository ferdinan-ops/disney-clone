import firebase from "firebase/compat/app";
import { getStorage } from "firebase/storage";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDH7AHBtPQ7_NOTwk30E1fu-xezwxG3jAU",
  authDomain: "disneyplus-clone-840a3.firebaseapp.com",
  projectId: "disneyplus-clone-840a3",
  storageBucket: "disneyplus-clone-840a3.appspot.com",
  messagingSenderId: "698910657379",
  appId: "1:698910657379:web:db3fe76ffc2982b712e156",
  measurementId: "G-4JMS2N2WM1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;

/* Versi Sekarang */
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDH7AHBtPQ7_NOTwk30E1fu-xezwxG3jAU",
//   authDomain: "disneyplus-clone-840a3.firebaseapp.com",
//   projectId: "disneyplus-clone-840a3",
//   storageBucket: "disneyplus-clone-840a3.appspot.com",
//   messagingSenderId: "698910657379",
//   appId: "1:698910657379:web:db3fe76ffc2982b712e156",
//   measurementId: "G-4JMS2N2WM1",
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.getFirestore();
// const auth = getAuth();
// const provider = new auth.GoogleAuthProvider();
// const storage = getStorage();

// export { auth, provider, storage };
// export default db;
