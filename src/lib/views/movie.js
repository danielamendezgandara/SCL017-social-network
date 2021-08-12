 /*export const movieMatch = (movie) => {
   const movieView=`<div class="sheetContainer"></div>`;
   const moviePage=document.createElement('div');
   moviePage.innerHTML=movieView;

   const claseGlobal = moviePage.querySelector(".sheetContainer");

     const newDivElement = document.createElement("div");
     newDivElement.innerHTML = `
     <p class="sheetName">${movie.name}</p>
     <p class="sheetYear">${movie.year}</p>     
     <img class="sheetImg" src="${movie.imgPortada}">
     <p class="sheetSyn">${movie.synopsis}
     `;
     claseGlobal.appendChild(newDivElement);
     
     return moviePage;
 }*/

import { movieClicked} from "./home.js";


/*if(movieClicked){
  let perrito = movieClicked[0];
  console.log(perrito);
}*/

export default()=>{
   const movieR=`<div class="sheetContainer"><p>Hola es la película<p></div>`;
   const movieRR=document.createElement('div');
   movieRR.innerHTML=movieR;
   console.log(movieClicked);
   /*const r=movieClicked[0];
   console.log(r);*/
   return movieRR;
}
  

   

 





