import firebase from 'firebase';


/*
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
*/

const firebaseConfig = {
    apiKey: process.env.VUE_APP_APIKEY,
    authDomain: `${process.env.VUE_APP_DOMAIN}.firebaseapp.com`,
    databaseURL: `https://${process.env.VUE_APP_DOMAIN}.firebaseio.com`,
    projectId: `${process.env.VUE_APP_DOMAIN}`,
    storageBucket: `${process.env.VUE_APP_DOMAIN}.appspot.com`,
    messagingSenderId: `${process.env.VUE_APP_MESSAGINGSENDERID}`,
    appId: `${process.env.VUE_APP_APPID}`,
    measurementId: `${process.env.VUE_APP_MEASUREMENTID}`
};
console.log('env', JSON.stringify(process.env));

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();