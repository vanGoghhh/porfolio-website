import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBSguR9XJy90H4Gu58sW_Gyouq_eeQDrMY",
    authDomain: "personal-website-bcbf9.firebaseapp.com",
    databaseURL: "https://personal-website-bcbf9-default-rtdb.firebaseio.com",
    projectId: "personal-website-bcbf9",
    storageBucket: "personal-website-bcbf9.appspot.com",
    messagingSenderId: "676507364612",
    appId: "1:676507364612:web:11d2924949a3413e6eb451",
    measurementId: "G-P5TS6QPW8F"
})

var db = firebaseApp.firestore();

export default db;