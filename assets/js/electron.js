$(document).ready(async function() {

    let buttonSignIn = document.getElementById('buttonSignIn')
    let buttonCloseSignIn = document.getElementById('buttonCloseSignIn')
    let signInWindow = document.getElementById('sign-in-window')
    let bluringDiv = document.getElementById('blurer-div')
    let SignInButtonMain = document.getElementById('SignInButton')
    let LoginInput = document.getElementById('login-input')
    let PasswordInput = document.getElementById('password-input')

    buttonSignIn.onclick = function () {
        signInWindow.style.display = 'block'
        bluringDiv.style.display = 'block'
    }
    buttonCloseSignIn.onclick = function () {
        signInWindow.style.display = 'none'
        bluringDiv.style.display = 'none'
    }

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


    SignInButtonMain.onclick = function () {
        let login = LoginInput.value
        let password = PasswordInput.value

        document.getElementById("loading-img").style.display = "block";

        auth.signInWithEmailAndPassword(login, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)

                setTimeout(function() {
                    window.location.href = '/electron/dashboard';
                }, 2*1000);


                // Create cache of user authentication
                auth.setPersistence(auth.browserSessionPersistence)
                    .then(() => {
                        // Existing and future Auth states are now persisted in the current
                        // session only. Closing the window would clear any existing state even
                        // if a user forgets to sign out.

                        // New sign-in will be persisted with session persistence.
                        return auth.signInWithEmailAndPassword(login, password);
                    })
                    .catch((error) => {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                    });

            })
            .catch((error) => {
                document.getElementById("loading-img").style.display = "none";

                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    setTimeout(function(){
        if (auth.currentUser !== null) {
            let user = auth.currentUser;
            console.log(user);

            setTimeout(function(){
                window.location.href = '/electron/dashboard';
            }, 1*1000);
        }
    }, 2*1000);

})