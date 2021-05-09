import firebase from "firebase";

var firebaseApp = firebase.initializeApp ( {
    
   
 
   });


   var db = firebaseApp.firestore();


   export { db };