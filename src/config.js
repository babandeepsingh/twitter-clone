import firebase from 'firebase';
const firebaseConfig = {
    //Config data
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;