import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBYCF9dZeRpEM2qmp3oiDHiISP6X-RHRaY",
  authDomain: "dien-store.firebaseapp.com",
  projectId: "dien-store",
  storageBucket: "dien-store.appspot.com",
  messagingSenderId: "842903125815",
  appId: "1:842903125815:web:2cf2b1664dc0078fcf24b2",
  measurementId: "G-LL0T7NDH3H"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;