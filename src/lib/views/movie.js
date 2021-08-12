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
   <div><img class="sheetImg" src="${globalMovie.imgPortada}">
   <span class="sheetName">${globalMovie.name}</span>
   </div>
   <div><span class="sheetGender">${globalMovie.gender}</span>
   <span class="sheetYear">${globalMovie.year}</span></div>
   <div class=star></div>
   </div>
   <div><p class="sheetTitle">Sinopsis</p>
   <p class="sheetSyn">${globalMovie.synopsis}</p>
   </div>
   <div><div><p class="sheetTitle">Ver trailer y spoilers</p></div>
   <div class="logoProvider"><a href="${globalMovie.youtube}"><img src="data/imgIconos/youtube.png"/></a>
   <a href="${globalMovie.spoilers}"><img src="data/imgIconos/spoilers.png"/></a></div>
   </div>
   <div><div><p class="sheetTitle">Ver ahora</p></div>
   <div class="logoProvider"><a href="${globalMovie.cuevana}"><img src="data/imgIconos/cuevana.png"/></a>
   <a href="${globalMovie.netflix}"><img src="data/imgIconos/netflix.png"/></a>
   <a href="${globalMovie.disney}"><img src="data/imgIconos/disney.png"/></a></div>
   </div>
   <div><div><p class="sheetTitle">Comentarios</p></div>
   <div class=""></div>
   </div>
   <div><a href="#home"><img class="back" src="img/back.png"/></a></div>
    `;
  claseGlobal.appendChild(newDivElement);

  return moviePage;
};


  

   

 





