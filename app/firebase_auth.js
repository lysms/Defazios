import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyD3K-hw17dXiWua5CqPm9i8lhLEga2eznQ",
    authDomain: "defazios-37d6c.firebaseapp.com",
    projectId: "defazios-37d6c",
    storageBucket: "defazios-37d6c.appspot.com",
    messagingSenderId: "354753035029",
    appId: "1:354753035029:web:74252d38ba217581ccc71c",
    measurementId: "G-D77CK0V410"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth();

export { auth };