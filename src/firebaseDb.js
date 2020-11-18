import firebase from 'firebase';
import dotenv from 'dotenv';

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: `${process.env.DOMAIN}.firebaseapp.com`,
    databaseURL: `https://${process.env.DOMAIN}.firebaseio.com`,
    projectId: `${process.env.DOMAIN}`,
    storageBucket: `${process.env.DOMAIN}.appspot.com`,
    messagingSenderId: `${process.env.MESSAGINGSENDERID}`,
    appId: `${process.env.APPID}`,
    measurementId: `${process.env.MEASUREMENTID}`
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();