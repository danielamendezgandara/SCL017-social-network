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
   <p class="sheetName">${globalMovie.name}</p>
   <p class="sheetYear">${globalMovie.year}</p>
   <img class="sheetImg" src="${globalMovie.imgPortada}">
   <p class="sheetSyn">${globalMovie.synopsis}
   `;
  claseGlobal.appendChild(newDivElement);

  return moviePage;
};


  

   

 





