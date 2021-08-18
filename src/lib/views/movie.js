const dCounters = document.querySelectorAll('.CountLike');

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
      <div class="Likecontainer">

      <div class="CountLike" id="Like Count">
  <button class="button button1"><i class="fa fa-heart"></i> Like <span class="counterStat">...</span></button>
</div>
       </div>
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


    [].forEach.call(dCounters, function(dCounter) {
      const el = dCounter.querySelector('button');
      const cId = dCounter.id;
      const dDatabase = firebase.database().ref('Like Number Counter').child(cId);
    
      // get firebase data
      dDatabase.on('value', function(snap) {
          const data = snap.val() || 0;
          dCounter.querySelector('span').innerHTML = data;
      });
    
      // set firebase data
      el.addEventListener('click', function() {
          dDatabase.transaction(function(dCount) {
              return (dCount || 0) + 1;
          });
      });
      
    });
   

  return moviePage;
};
