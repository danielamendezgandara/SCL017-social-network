let globalMovie;
export const movieMatch = (movie) => {
  globalMovie = movie;
  window.location.hash = "#movie";
};

export default () => {
  const movieView = `<div class="sheetContainer"></div>`;
  const moviePage = document.createElement("div");
  moviePage.innerHTML = movieView;

  const claseGlobal = moviePage.querySelector(".sheetContainer");
  const newDivElement = document.createElement("div");
  newDivElement.innerHTML = `
   <div class="left-test">
    <div class="img">
      <img class="sheetImg" src="${globalMovie.imgPortada}">
    </div>
    <div class="info">
      <span class="sheetGender">${globalMovie.gender}</span>
      <span class="sheetYear">${globalMovie.year}</span>
      <img class="star" src="img/star.png"/>
    </div>
    <div class="syn">
      <p class="sheetTitle">Sinopsis</p>
      <p class="sheetSyn">${globalMovie.synopsis}</p>
     </div>
    <div class="provider-1">
      <p class="sheetTitle">Ver trailer y spoilers</p>
      <a href="${globalMovie.spoilers}"><img class="logoSpoilers" src="data/imgIconos/spoilers.png"/></a>
      <a href="${globalMovie.youtube}"><img class="logoYoutube" src="data/imgIconos/youtube.png"/></a>
    </div>
   </div>
    <div class="provider-2">
      <p class="sheetTitle">Ver ahora</p>
      <a href="${globalMovie.cuevana}"><img class="logoCuevana" src="data/imgIconos/cuevana.png"/></a>
      <a href="${globalMovie.netflix}"><img class="logoNetflix" src="data/imgIconos/netflix.png"/></a>
      <a href="${globalMovie.disney}"><img class="logoDisney" src="data/imgIconos/disney.png"/></a>
      <p class="sheetTitle">Comentarios</p>
      <input type="text" class="box" placeholder="   Añadir Comentario">
    </div>
    <div class="icon-back">
      <a href="#home"><img class="back" src="img/back.png"/></a>
      <span class="sheetTitle">Volver atrás</span>
    </div>
    `;
  claseGlobal.appendChild(newDivElement);

  return moviePage;
};


  



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
      var dor=  firebase.firestore().collection("users").doc(uid);
      dor.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            console.log(doc.data().movieView);
            sheetContainer.appendChild(viewMovie(doc.data().movieView));
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

 };

   
   

 





