
import pelicula from "../../data/pelicula.js";

export const viewMovie= (nameMovie)=>{
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
       <input type="text" class="box" placeholder="   Añadir Comentario">
     </div>
     <div class="icon-back">
       <a href="#home"><img class="back" src="img/back.png"/></a>
       <span class="sheetTitle">Volver atrás</span>
     </div>
     </div>
     `
     const globalMovie=document.createElement('div');
     globalMovie.innerHTML=moviePage;
     return globalMovie;
}
/*
import { createComment,preventSendCommet } from "../controllers/comment-controller.js";
import { getNote} from "../models/modelFirebase.js";
import { allComments } from "./comments.js";

const nameMovie='Lucifer';
export default ()=>{
    const wallView=`<div><a href="#profile">Perfil</a></div><section class="comments-section" data-name=${nameMovie}>
                     <articule class="comments-view" id="comments-view"></articule>
                 <form  class="form-comments" id="form-comments">
                      <textarea id="comment" cols="50" rows="5" class="comment" placeholder="Añade un comentario"></textarea>
                      <button class="share-comment hide" id="share-comment">Compartir</button>
                 </form>
              </section>`;
    const wallPage=document.createElement('main');
    wallPage.innerHTML=wallView;
    const comment = wallPage.querySelector('#comment');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) { 
        comment.disabled=false;
      } else {
        comment.disabled=true;
      }
    });

    
   
    const showComments=wallPage.querySelector('#comments-view');
    getNote(nameMovie,(querySnapshot) => {
        showComments.innerHTML = '';
        
        querySnapshot.forEach(doc => {
            console.log(doc.data());
            showComments.appendChild(allComments(nameMovie,doc,doc.data())) ;
        })});
  
    const formComment=wallPage.querySelector('#form-comments');
    comment.addEventListener('input',preventSendCommet);
    formComment.addEventListener('submit',createComment)
    return  wallPage;
}
*/