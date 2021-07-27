const signUpUserEmailPassword=(userEmail,userPassword)=>{
  let email=document.getElementById("mail-creation").value;
  let password=document.getElementById("pass-creation").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
 .then((userCredential) => {
  verifyUser();
  const user = userCredential.user;
  document.getElementById("myModal").style.display='none';
  console.log(user);
  })
 .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  userEmail.value='';
  userPassword.value='';
  console.log(errorCode,errorMessage);
});
 
}

var provider = new firebase.auth.GoogleAuthProvider();
const signUpUserGoogle=()=>{
firebase.auth()
.signInWithPopup(provider)
.then((result) => {
  /** @type {firebase.auth.OAuthCredential} */
  var credential = result.credential;

  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch((error) => {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}

const observeUser=()=>{
firebase.auth().onAuthStateChanged((user) => {
   if (user) { 
     const displayName = user.displayName;
     const email = user.email;
     const photoURL = user.photoURL;
     const emailVerified = user.emailVerified; 
     const uid = user.uid;
    console.log(emailVerified);
    console.log('Existe un usuario activo');
   } else {
     console.log('No existe un usuario activo');
   }
 });
}

const verifyUser=()=>{
firebase.auth().currentUser.sendEmailVerification()
.then(() => {
  console.log('Correo de verificación enviado');
});

}

observeUser();

export {signUpUserEmailPassword,signUpUserGoogle};

