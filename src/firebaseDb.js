import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDM0QRhxR7kLgZUXOhzz1R8l3zCER1ZrVY",
    authDomain: "lottery-3c582.firebaseapp.com",
    databaseURL: "https://lottery-3c582.firebaseio.com",
    projectId: "lottery-3c582",
    storageBucket: "lottery-3c582.appspot.com",
    messagingSenderId: "693340419747",
    appId: "1:693340419747:web:f2643e073474e663367116",
    measurementId: "G-W9LPGKREYP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();