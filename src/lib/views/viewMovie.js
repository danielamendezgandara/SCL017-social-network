
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
