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

    document.getElementById("account-logout").onclick = function () {
        signOut()
        setTimeout(function(){
            window.location.href = '/electron';
        }, 1000);
    }

    document.getElementById("storage").classList.remove("not-display")
    document.getElementById("menu-storage").classList.add("db-menu-li-selected")

    document.getElementById("menu-account").onclick = function () {
        document.getElementById("storage").classList.add("not-display")
        document.getElementById("my-files").classList.add("not-display")
        document.getElementById("upload-file").classList.add("not-display")
        document.getElementById("my-olymps").classList.add("not-display")
        document.getElementById("account").classList.remove("not-display")

        document.getElementById("menu-storage").classList.remove("db-menu-li-selected")
        document.getElementById("menu-my-files").classList.remove("db-menu-li-selected")
        document.getElementById("menu-upload-file").classList.remove("db-menu-li-selected")
        document.getElementById("menu-my-olymps").classList.remove("db-menu-li-selected")
        document.getElementById("menu-account").classList.add("db-menu-li-selected")
    }

    document.getElementById("menu-storage").onclick = function () {
        document.getElementById("storage").classList.remove("not-display")
        document.getElementById("my-files").classList.add("not-display")
        document.getElementById("upload-file").classList.add("not-display")
        document.getElementById("my-olymps").classList.add("not-display")
        document.getElementById("account").classList.add("not-display")

        document.getElementById("menu-storage").classList.add("db-menu-li-selected")
        document.getElementById("menu-my-files").classList.remove("db-menu-li-selected")
        document.getElementById("menu-upload-file").classList.remove("db-menu-li-selected")
        document.getElementById("menu-my-olymps").classList.remove("db-menu-li-selected")
        document.getElementById("menu-account").classList.remove("db-menu-li-selected")
    }

    document.getElementById("menu-my-files").onclick = function () {
        document.getElementById("storage").classList.add("not-display")
        document.getElementById("my-files").classList.remove("not-display")
        document.getElementById("upload-file").classList.add("not-display")
        document.getElementById("my-olymps").classList.add("not-display")
        document.getElementById("account").classList.add("not-display")

        document.getElementById("menu-storage").classList.remove("db-menu-li-selected")
        document.getElementById("menu-my-files").classList.add("db-menu-li-selected")
        document.getElementById("menu-upload-file").classList.remove("db-menu-li-selected")
        document.getElementById("menu-my-olymps").classList.remove("db-menu-li-selected")
        document.getElementById("menu-account").classList.remove("db-menu-li-selected")
    }

    document.getElementById("menu-upload-file").onclick = function () {
        document.getElementById("storage").classList.add("not-display")
        document.getElementById("my-files").classList.add("not-display")
        document.getElementById("upload-file").classList.remove("not-display")
        document.getElementById("my-olymps").classList.add("not-display")
        document.getElementById("account").classList.add("not-display")

        document.getElementById("menu-storage").classList.remove("db-menu-li-selected")
        document.getElementById("menu-my-files").classList.remove("db-menu-li-selected")
        document.getElementById("menu-upload-file").classList.add("db-menu-li-selected")
        document.getElementById("menu-my-olymps").classList.remove("db-menu-li-selected")
        document.getElementById("menu-account").classList.remove("db-menu-li-selected")
    }

    document.getElementById("menu-my-olymps").onclick = function () {
        document.getElementById("storage").classList.add("not-display")
        document.getElementById("my-files").classList.add("not-display")
        document.getElementById("upload-file").classList.add("not-display")
        document.getElementById("my-olymps").classList.remove("not-display")
        document.getElementById("account").classList.add("not-display")

        document.getElementById("menu-storage").classList.remove("db-menu-li-selected")
        document.getElementById("menu-my-files").classList.remove("db-menu-li-selected")
        document.getElementById("menu-upload-file").classList.remove("db-menu-li-selected")
        document.getElementById("menu-my-olymps").classList.add("db-menu-li-selected")
        document.getElementById("menu-account").classList.remove("db-menu-li-selected")
    }

    setTimeout(function(){
        if (auth.currentUser == null) {
            window.location.href = '/electron';
        }
    }, 2000);

})
