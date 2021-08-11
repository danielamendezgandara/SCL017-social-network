import { errorAuthUser, loginUserWithEmailPassword, signInUserFacebookAccount, signInUserGoogleAccount } from "../models/modelFirebase.js";

const signInUserEmailPassword = () =>{
    const email = document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const message=document.getElementById("messageLogin");
    loginUserWithEmailPassword(email,password).then((userLogin) => {
        if(userLogin.user.emailVerified !== true){
          message.innerHTML='Valida tu cuenta por favor. Revisa tu correo.';
        }else{
         window.location.hash='#home';
        }
        })
        .catch((error) => {
        const errorCode = error.code;
        message.innerHTML=errorAuthUser(errorCode);
        });
}

const signInUserGoogle = () =>{
  signInUserGoogleAccount().then((result) => {
    window.location.hash='#home';
    // console.log(result.user);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    alert("Error detectado al usar la cuenta de google");
  });
  }

  const signInUserFacebook = () =>{
    signInUserFacebookAccount().then((result) => {
      window.location.hash='#home';
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log(errorCode);
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('La dirección de correo electrónico ya esta en uso');
      }
    });
  }

export {signInUserEmailPassword,signInUserGoogle,signInUserFacebook};