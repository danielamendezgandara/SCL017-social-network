import pelicula from "../../data/pelicula.js";

export default ()=>{
    const homeView=`<div id="home">
    <div><img class= "img-logo" src="img/logo.png"></div>
    <div class="text"> 
    <h1>MENÚ</h1>
    </div>
    <div><img class="" src=""></div>
    <a href="#profile">Perfil</a>
    <div>
    <h1>CATEGORÍAS</h1>
    <ul>
    <li>Terror</li>
    <li>Acción</li>
    <li>Suspenso</li>
    <li>Comedia</li>
    </ul>
    </div>

    <section class="carousel">
    <ul>
    <li><img src="data/imgPortada/ava.jpg" alt=""></li>
    <li><img src="data/imgPortada/blackWidow.jpg" alt=""></li>
    <li><img src="data/imgPortada/bloodRedSky.jpg" alt=""></li>
    <li><img src="data/imgPortada/fearStreetPartThree.jpg" alt=""></li>
    <li><img src="data/imgPortada/girlNext.jpg" alt=""></li>
    <li><img src="data/imgPortada/howibecameasuperhero.jpg" alt=""></li>
    <li><img src="data/imgPortada/jolt.png" alt=""></li>
    <li><img src="data/imgPortada/laManoDelDemonio.jpg" alt=""></li>
    <li><img src="data/imgPortada/oxygen.jpg" alt=""></li>
    <li><img src="data/imgPortada/thepParamedic.jpg" alt=""></li>
    <li><img src="data/imgPortada/thunderForce.jpeg" alt=""></li>
    <li><img src="data/imgPortada/unidos.jpg" alt=""></li>
    </ul>
  </section>
    </div>`;
    const homePage=document.createElement('section');
    homePage.innerHTML=homeView;

    const dataMovie = pelicula.pelicula;

    dataMovie.filter(movie => movie.gender === "Terror").forEach(gender=>{
      const genderMatch = document.createElement("div");
      genderMatch.innerHTML = `<img class="imgHome" src="${gender.imgHome}">`;
      homePage.appendChild(genderMatch);
    });

    return homePage;
}