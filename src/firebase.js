import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({

    apiKey: "AIzaSyCks4W71HDcdD_stCGrq-hHp9MjkMiDOFs",
    authDomain: "infinity-scroll-ed449.firebaseapp.com",
    projectId: "infinity-scroll-ed449",
    storageBucket: "infinity-scroll-ed449.appspot.com",
    messagingSenderId: "863032110611",
    appId: "1:863032110611:web:76d665f1cf95b789c6d9e6",
    measurementId: "G-WVF4GTLZBP"


})

export const auth = app.auth();
export default app