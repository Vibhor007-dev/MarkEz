import firebase from 'firebase';

  
 var firebaseConfig = {
  apiKey: "AIzaSyDJa8k6QYh_eKaEXwZ5-a7QQHEhC4E-R4M",
    authDomain: "mark-ez.firebaseapp.com",
    databaseURL: "https://mark-ez-default-rtdb.firebaseio.com",
    projectId: "mark-ez",
    storageBucket: "mark-ez.appspot.com",
    messagingSenderId: "932304607141",
    appId: "1:932304607141:web:ffbcdf0af426277d1a3a4c"

  };
    

  // Initialize Firebase
 let app = firebase.initializeApp(firebaseConfig);
 export default app.database();
