$(document).ready(async function() {
    let SignUpButtonMain = document.getElementById('SignUpButton')
    let LoginInput = document.getElementById('login-input')
    let PasswordInput = document.getElementById('password-input')
    let PasswordInputAgain = document.getElementById('password-input-again')
    let text_error = document.getElementById('error-text');

    // Import the functions you need from the SDKs you need
    // import { initializeApp } from "firebase/app";
    // import { getAnalytics } from "firebase/analytics";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

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

    SignUpButtonMain.onclick = function () {
        let login = LoginInput.value
        let password = PasswordInput.value
        let passwordAgain = PasswordInputAgain.value

        if (password === passwordAgain) {
            auth.createUserWithEmailAndPassword(login, password)
                .then((userCredential) => {
                    // Signed in
                    // const user = userCredential.user;
                    // console.log(user);
                    db.collection('users').doc(auth.currentUser.uid).set({})
                    // Перенаправление
                    setTimeout(function(){
                        window.location.href = 'https://fizmat.ga/electron';
                    }, 3 * 1000);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    text_error.innerText = errorMessage;
                });
        } else {
            text_error.innerText = "Passwords are different.";
        }
    }


})