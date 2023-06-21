import Firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from "../seed";

const config = {
    apiKey: "AIzaSyCUhzl9I-lY45418REJ9HpWnbasxLvsM_4",
    authDomain: "project1-c2782.firebaseapp.com",
    projectId: "project1-c2782",
    storageBucket: "project1-c2782.appspot.com",
    messagingSenderId: "767640126876",
    appId: "1:767640126876:web:f2648df240ceebd0def459"
}
const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export {firebase};

