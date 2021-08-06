import pelicula from "../../data/pelicula.js";

export default ()=>{
    const homeView=`<div id="home">
    <div><img class= "img-logo" src="img/logo.png"></div>
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
  <section class="category-1">
      <p class="category-text">Terror</p>
       <p class="showAll">Ver todo</p>
      <img src="" alt="">
    </section>
  <section class="category-2">
     <p class="category-text">Acción</p>
     <p class="showAll">Ver todo</p>
    <img src="" alt="">
    </section>
  <section class="category-3">
    <p class="category-text">Suspenso</p>
    <p class="showAll">Ver todo</p>
   <img src="" alt="">
   </section>
   <section class="category-4">
   <p class="category-text">Comedia</p>
   <p class="showAll">Ver todo</p>
  <img src="" alt="">
  </section>
  <nav>
    <a href="#home">Home</a>
    <a href="#profile">Perfil</a>
    <a href="#">Cerrar sesión</a>
  </nav>

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