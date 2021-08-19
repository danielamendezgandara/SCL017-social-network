import pelicula from "../../data/pelicula.js";
import { createComment,preventSendCommet } from "../controllers/comment-controller.js";
import { getNote} from "../models/modelFirebase.js";
import { allComments } from "./comments.js";

export const viewMovie= (name)=>{
    const nameMovie=name;
    console.log(nameMovie);
    const dataMovie = pelicula.pelicula;
  const dataFilterMovie= dataMovie.filter(movie => movie.name === nameMovie);
  console.log(dataFilterMovie[0]["name"]);
    const moviePage = `<div data-name="${dataFilterMovie[0]["name"]}">
    <div class="left-test">
     <div class="img">
       <img class="sheetImg" src="${dataFilterMovie[0]["imgPortada"]}">
     </div>
     <div class="info">
       <span class="sheetGender">${dataFilterMovie[0]["gender"]}</span>
       <span class="sheetYear">${dataFilterMovie[0]["year"]}</span>
       <img class="star" src="img/star.png"/>
     </div>
     <div class="syn">
       <p class="sheetTitle">Sinopsis</p>
       <p class="sheetSyn">${dataFilterMovie[0]["synopsis"]}</p>
      </div>
     <div class="provider-1">
       <p class="sheetTitle">Ver trailer y spoilers</p>
       <a href="${dataFilterMovie[0]["spoilers"]}"><img class="logoSpoilers" src="data/imgIconos/spoilers.png"/></a>
       <a href="${dataFilterMovie[0]["youtube"]}"><img class="logoYoutube" src="data/imgIconos/youtube.png"/></a>
     </div>
    </div>
     <div class="provider-2">
       <p class="sheetTitle">Ver ahora</p>
       <a href="${dataFilterMovie[0]["cuevana"]}"><img class="logoCuevana" src="data/imgIconos/cuevana.png"/></a>
       <a href="${dataFilterMovie[0]["netflix"]}"><img class="logoNetflix" src="data/imgIconos/netflix.png"/></a>
       <a href="${dataFilterMovie[0]["disney"]}"><img class="logoDisney" src="data/imgIconos/disney.png"/></a>
       <p class="sheetTitle">Comentarios</p>
       <section class="comments-section" data-name="${dataFilterMovie[0]["name"]}">
                     <articule class="comments-view" id="comments-view"></articule>
                 <form  class="form-comments" id="form-comments">
                      <textarea id="comment" cols="50" rows="5" class="comment" placeholder="Añade un comentario"></textarea>
                      <button class="share-comment hide" id="share-comment">Compartir</button>
                 </form>
      </section>
     </div>
     <div class="icon-back">
       <a href="#home"><img class="back" src="img/back.png"/></a>
       <span class="sheetTitle">Volver atrás</span>
     </div>
     </div>
     `
     const globalMovie=document.createElement('div');
     globalMovie.innerHTML=moviePage;
     const showComments=globalMovie.querySelector('#comments-view');
     const comment = globalMovie.querySelector('#comment');

     firebase.auth().onAuthStateChanged((user) => {
      if (user) { 
        comment.disabled=false;
      } else {
        comment.disabled=true;
      }
    });
    getNote(nameMovie,(querySnapshot) => {
        showComments.innerHTML = '';
        
        querySnapshot.forEach(doc => {
            console.log(doc.data());
            showComments.appendChild(allComments(nameMovie,doc,doc.data())) ;
        })});
  
    const formComment=globalMovie.querySelector('#form-comments');
    comment.addEventListener('input',preventSendCommet);
    formComment.addEventListener('submit',createComment);
     return globalMovie;
}
