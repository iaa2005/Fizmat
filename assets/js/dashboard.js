$(document).ready(async function() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCn_X8y0ZVq8IMLHEAap7OvO2OE9WjhEjo",
        authDomain: "fizmat-b179e.firebaseapp.com",
        projectId: "fizmat-b179e",
        storageBucket: "fizmat-b179e.appspot.com",
        messagingSenderId: "994031172624",
        appId: "1:994031172624:web:ccfd46d55b84eebbf15e95",
        measurementId: "G-QGP518PBC8"
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();

    function signOut() {
        auth.signOut().then(function () {
            console.log("Signed Out")
        }, function (error) {
            console.log("Signed Out - Error")
        })
    }

    setTimeout(function(){
        console.log(auth.currentUser);
    }, 2*1000);
})
