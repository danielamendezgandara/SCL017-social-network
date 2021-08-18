// Registro de usuario e inicio de sesión de usuario mediante email y contraseña

const objErrorMessage = {
    'auth/invalid-email':'La dirección de correo electrónico no es valida.',
    'auth/email-already-in-use': 'La dirección de correo electrónico ya esta en uso.',
    'auth/weak-password' : 'La contraseña debe tener al menos 6 caracteres.',
    'auth/wrong-password' : 'La contraseña es inválida.',
    'auth/user-not-found' : 'No hay registro de usuario correspondiente a este identificador.'
  }
  
  export const authUserWithEmailPassword= (email,password) => firebase.auth().createUserWithEmailAndPassword(email, password);
  
  export const sendEmailVerification = () => firebase.auth().currentUser.sendEmailVerification();
  
  export const loginUserWithEmailPassword = (email,password) => firebase.auth().signInWithEmailAndPassword(email, password);
  
  export const errorAuthUser = (errorCode) => objErrorMessage[errorCode];
  
  
  
  // Creación de instancia del objeto del proveedor de Google
  
  export const signInUserGoogleAccount = () =>{
      const providerGoogle = new firebase.auth.GoogleAuthProvider();
      return firebase.auth().signInWithPopup(providerGoogle);
  };
  
  // Creación de instancia del objeto del proveedor de Facebook
  
  export const signInUserFacebookAccount = () =>{
      const providerFacebook = new firebase.auth.FacebookAuthProvider();
      return firebase.auth().signInWithPopup(providerFacebook);
  }
  
  // Obtención del usuario con sesión activa
  
  export const userActive = () =>firebase.auth().currentUser;
  
  // Observador para mostrar el estado del usuario (activo/inactivo)
  
  export const observeStatusUser = () =>{
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
      };
  
  // Cerrar sesión de usuario 
  export const signOutUser = () =>firebase.auth().signOut();
  // Crear colección de datos
  export const addCollection = (newCollection,id,object) =>firebase.firestore().collection(newCollection).doc(id).set(object);
  
  export const addComments = (archive,nameMovie,obj) =>firebase.firestore().collection(archive).doc(nameMovie).collection('comments').add(obj);

  export const addInfo = (archive,nameMovie,obj) =>firebase.firestore().collection(archive).doc(nameMovie).collection('infoMovie').add(obj);
  