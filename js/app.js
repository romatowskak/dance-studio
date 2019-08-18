
(function() {

  // web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBPZ9l-fqa8c9FVSYTd6RJER5_AffEYzJc",
    authDomain: "fir-project-53e82.firebaseapp.com",
    databaseURL: "https://fir-project-53e82.firebaseio.com",
    projectId: "fir-project-53e82",
    storageBucket: "fir-project-53e82.appspot.com",
    messagingSenderId: "182689231",
    appId: "1:182689231:web:2eafc8ee496f70a7"
  };

    // initialize Firebase
    firebase.initializeApp(firebaseConfig);


    // get elements

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogIn = document.getElementById('btnLogIn');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogOut = document.getElementById('btnLogOut');

    // add login event
    // second parameter - callback function

    btnLogIn.addEventListener('click', e => {
    // get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);

    // we can use this promise to catch any error that might happen
    // if there is a user we will log them in, if not we will log out an error

    promise.catch(e => console.log(e.message));


    });

    // sign up event/creating new user

    btnSignUp.addEventListener('click', e => {

        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);

    

       promise.catch(e => console.log(e.message));

    });

    // log out event listener

     btnLogOut.addEventListener('click', e => {
         firebase.auth().signOut();
     })

    // real time authentication listener 

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            btnLogOut.classList.remove('hide');
        } else {
            console.log('not logged in');
            btnLogOut.classList.add('hide');
        }
    });

}());