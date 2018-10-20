import Firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDHcGpnplnhUtwjCeoeUIeFekWc9fGAvbA",
    authDomain: "project-healthcareapp.firebaseapp.com",
    databaseURL: "https://project-healthcareapp.firebaseio.com",
    projectId: "project-healthcareapp",
    storageBucket: "project-healthcareapp.appspot.com",
    messagingSenderId: "992274078858"
};
export const firebaseApp =  Firebase.initializeApp(config);