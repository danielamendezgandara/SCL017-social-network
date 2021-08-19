/*import { visitMovie } from "../controllers/movie-controller.js";
import { getDoc } from "../models/modelFirebase.js";*/

import { viewMovie } from "./viewMovie.js";

export default ()=>{
  const movieView = `<div class="sheetContainer"></div>`;
  const moviePage = document.createElement("div");
  moviePage.innerHTML = movieView;
  const sheetContainer=moviePage.querySelector('.sheetContainer');
  firebase.auth().onAuthStateChanged((user) => {
    if (user) { 
      const uid = user.uid;
      var dor=  firebase.firestore().collection("users").doc(uid);
      dor.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            console.log(doc.data().movieView);
            var docRef = firebase.firestore().collection("post").doc(doc.data().movieView);
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
  });

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
 };





/* const ui= userActive().uid

  
 
 }*/

   