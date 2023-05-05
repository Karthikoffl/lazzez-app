import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyDQ2IANGd25OLeLXpQf96sIgKo7skCCFEc",
    authDomain: "lazeez-kitchen-876f3.firebaseapp.com",
    projectId: "lazeez-kitchen-876f3",
    storageBucket: "lazeez-kitchen-876f3.appspot.com",
    messagingSenderId: "586012277192",
    appId: "1:586012277192:web:ae9e7a19112baa0b2768fd"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}