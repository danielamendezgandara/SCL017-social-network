import {addCollection, authUserWithEmailPassword, errorAuthUser, sendEmailVerification } from "../models/modelFirebase.js";
addCollection
const signUpUserEmailPassword = () =>{
    const email=document.getElementById("mail-creation").value;
    const password=document.getElementById("pass-creation").value;
    const modalRegister=document.getElementById("myModal");
    const form=document.getElementById("formAccCreation");
    const message=document.getElementById("message");
    authUserWithEmailPassword(email,password).then((newUser) => {
        sendEmailVerification();
        const objUser =  {
            name : newUser.user.displayName,
            email: newUser.user.email,
            photoURL:'https://img.icons8.com/ios-glyphs/120/000000/user-female.png',
        };
        addCollection('users',newUser.user.uid,objUser);
        modalRegister.style.display='none';
        alert('Revisa tu correo electrónico');
        })
       .catch((error) => {
        const errorCode = error.code;
        form.reset();
        message.innerHTML= errorAuthUser(errorCode);
        console.log(error);
      });
    }

const signUpUserGoogle = () =>{
    signInUserGoogleAccount().then((result) => {
    const user = result.user;
    const docRef=firebase.firestore().collection('users').doc(user);
    docRef.get().then((doc) => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          const objUser= {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
      };
      addCollection('users',user.uid,objUser)
      .then(() => {
        window.location.hash = '#home';
      });
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
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

const signUpUserFacebook = () =>{
    signInUserFacebookAccount().then((result) => {
        const user = result.user;
        const objUser= {
              name: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
        };
        addCollection('users',user.uid,objUser)
        .then(() => {
          window.location.hash = '#home';
        });
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

export {signUpUserEmailPassword, signUpUserGoogle,signUpUserFacebook};