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
   <div><img class="sheetImg" src="${globalMovie.imgPortada}"></div>
   <div><span class="sheetGender">${globalMovie.gender}</span>
   <span class="sheetYear">${globalMovie.year}</span>
   <img class="star" src="img/star.png"/>
   </div>
   <div><p class="sheetTitle">Sinopsis</p>
   <p class="sheetSyn">${globalMovie.synopsis}</p>
   </div>
   <div><div><p class="sheetTitle">Ver trailer y spoilers</p></div>
   <a href="${globalMovie.spoilers}"><img class="logoSpoilers" src="data/imgIconos/spoilers.png"/></a>
   <a href="${globalMovie.youtube}"><img class="logoYoutube" src="data/imgIconos/youtube.png"/></a>
   </div>
   <div class="viewNow"><p class="sheetTitle">Ver ahora</p>
   <a href="${globalMovie.cuevana}"><img class="logoCuevana" src="data/imgIconos/cuevana.png"/></a>
   <a href="${globalMovie.netflix}"><img class="logoNetflix" src="data/imgIconos/netflix.png"/></a>
   <a href="${globalMovie.disney}"><img class="logoDisney" src="data/imgIconos/disney.png"/></a>
   </div>
   <div class="viewComm"><p class="sheetTitle">Comentarios</p>
   <div class="boxComm"></div>
   </div>
   <div><a href="#home"><img class="back" src="img/back.png"/></a></div>
    `;
  claseGlobal.appendChild(newDivElement);

  return moviePage;
};


  

   

 





