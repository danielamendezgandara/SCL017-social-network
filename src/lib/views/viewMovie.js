
import pelicula from "../../data/pelicula.js";
import { createComment,filterStatusLike,preventSendCommet } from "../controllers/comment-controller.js";
import {rankMovie } from "../controllers/movie-controller.js";
import { getNote, updataDoc} from "../models/modelFirebase.js";
import { allComments } from "./comments.js";


export const viewMovie= (name)=>{
  const nameMovie=name;
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
       <form class="ranking">
       <p class="clasification" data-name ="${nameMovie}">
         <input class="radio" id="radio1" type="radio" name="estrellas" value="5"><!--
         --><label for="radio1"><i class="fas fa-star"></i></label><!--
         --><input class="radio" id="radio2" type="radio"  name="estrellas" value="4"><!--
         --><label for="radio2"><i class="fas fa-star"></i></label><!--
         --><input class="radio" id="radio3" type="radio"name="estrellas" value="3"><!--
         --><label for="radio3"><i class="fas fa-star"></i></label><!--
         --><input class="radio" id="radio4"type="radio"name="estrellas" value="2"><!--
         --><label for="radio4"><i class="fas fa-star"></i></label><!--
         --><input class="radio" id="radio5"type="radio"name="estrellas" value="1"><!--
         --><label for="radio5"><i class="fas fa-star"></i></label>
       </p>
     </form>
     <p class="mean-stars"></p>
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
     const meanStars=globalMovie.querySelector('.mean-stars');
     const starRanking=globalMovie.querySelectorAll('.radio');
     
     firebase.auth().onAuthStateChanged((user) => {
      if (user) { 
        comment.disabled=false;
        const email=user.email;
          firebase.firestore().collection('postMovie').doc(nameMovie).get()
          .then((doc) => {
            if (doc.exists) {
              console.log(doc.data());
              if(doc.data().emailuser.length!==0){
                 const mean= doc.data().countStars/doc.data().emailuser.length;
                 meanStars.innerHTML=`${mean.toFixed(2)}` + '/5';
                 console.log(mean);
                 const meanStarsUsers={
                   meanStars : mean
                 }
                 updataDoc(nameMovie,meanStarsUsers)
                 .then(() => {
                  console.log('Document successfully updated!'); 
                })
                .catch((error) => {
                // The document probably doesn't exist.
                  console.error('Error updating document: ', error);
                });
                // meanStars.innerHTML=`${mean}`;
              }
              if(doc.data().emailuser.length!== 0 & doc.data().emailuser.includes(email)){
                const objStatusStar= filterStatusLike(doc.data().starchecked,email);
                const idStar=objStatusStar[0].star;
                const styleStar=objStatusStar[0].status;
                console.log(objStatusStar[0].star);
                starRanking.forEach(star=>{
                  if(star.id!==idStar){
                    star.classList.add(styleStar);
                  }else{
                    star.classList.add(styleStar);
                  } 
                });
              }   
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
      
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
    starRanking.forEach(star=>star.addEventListener('click',rankMovie));
    /*starOne.addEventListener('click',rankMovie);
    starTwo.addEventListener('click',rankMovie);
    starThree.addEventListener('click',rankMovie);
    starFour.addEventListener('click',rankMovie);
    starFive.addEventListener('click',rankMovie);*/

     return globalMovie;
}
