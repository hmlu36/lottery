import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage

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

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.database();