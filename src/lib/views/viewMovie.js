export const movieView=(movie)=>{
    const moviePage = `
    <div class="left-test">
     <div class="img">
       <img class="sheetImg" src="${movie.imgPortada}">
     </div>
     <div class="info">
       <span class="sheetGender">${movie.gender}</span>
       <span class="sheetYear">${movie.year}</span>
       <img class="star" src="img/star.png"/>
     </div>
     <div class="syn">
       <p class="sheetTitle">Sinopsis</p>
       <p class="sheetSyn">${movie.synopsis}</p>
      </div>
     <div class="provider-1">
       <p class="sheetTitle">Ver trailer y spoilers</p>
       <a href="${movie.spoilers}"><img class="logoSpoilers" src="data/imgIconos/spoilers.png"/></a>
       <a href="${movie.youtube}"><img class="logoYoutube" src="data/imgIconos/youtube.png"/></a>
     </div>
    </div>
     <div class="provider-2">
       <p class="sheetTitle">Ver ahora</p>
       <a href="${movie.cuevana}"><img class="logoCuevana" src="data/imgIconos/cuevana.png"/></a>
       <a href="${movie.netflix}"><img class="logoNetflix" src="data/imgIconos/netflix.png"/></a>
       <a href="${movie.disney}"><img class="logoDisney" src="data/imgIconos/disney.png"/></a>
       <p class="sheetTitle">Comentarios</p>
       <input type="text" class="box" placeholder="   Añadir Comentario">
     </div>
     <div class="icon-back">
       <a href="#home"><img class="back" src="img/back.png"/></a>
       <span class="sheetTitle">Volver atrás</span>
     </div>
     `
     const globalMovie=document.createElement('div');
     globalMovie.innerHTML=moviePage;
     return globalMovie;
}