import Firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from "../seed";

const config = {
    apiKey: "AIzaSyAc6PaAVvpaL8vjkHYe6_qtXUj4Y6JAOa4",
    authDomain: "project-6e7db.firebaseapp.com",
    projectId: "project-6e7db",
    storageBucket: "project-6e7db.appspot.com",
    messagingSenderId: "520450097268",
    appId: "1:520450097268:web:d397177d624d4377efd121"
}
const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export {firebase};

