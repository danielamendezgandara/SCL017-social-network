/*Se llama a la data del usuario específico para obtener el nombre de la película clickeada que está almacenada
en el elemento movieView del objeto del usuario y se manda a viewMovie que tiene la estructura de la reseña de la
película*/

import { viewMovie } from "./viewMovie.js";

export default ()=>{
  const movieView = `<div class="sheetContainer"></div>`;
  const moviePage = document.createElement("div");
  moviePage.innerHTML = movieView;
  const sheetContainer=moviePage.querySelector('.sheetContainer');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) { 
      const uid = user.uid;
      const docUser=  firebase.firestore().collection('users').doc(uid);
      docUser.get().then(async(doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            console.log(doc.data().movieView);
            sheetContainer.appendChild(await viewMovie(doc.data().movieView));
            /*var docRef = firebase.firestore().collection("post").doc(doc.data().movieView);
  docRef.get().then((doc) => {
      if (doc.exists) {
          sheetContainer.innerHTML="";
          console.log("Document data:", doc.data());
          sheetContainer.appendChild(viewMovie(doc.data()))
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });*/
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    
    });

    }
});
   
return moviePage; 

 }
