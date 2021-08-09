import pelicula from "../../data/pelicula.js";

export default ()=>{
    const homeView=`<div id="home">
    <div><img class="img-logo2" src="img/logo.png"></div>
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
         <div id="imgTerror"></div>
    </section>
  <section class="category-2">
     <p class="category-text">Acción</p>
      <p class="showAll">Ver todo</p>
        <div id="imgAccion"></div>
    </section>
  <section class="category-3">
    <p class="category-text">Suspenso</p>
      <p class="showAll">Ver todo</p>
       <div id="imgSuspenso"></div>
   </section>
   <section class="category-4">
    <p class="category-text">Comedia</p>
      <p class="showAll">Ver todo</p>
        <div id="imgComedia"></div>
  </section>
  <nav>
    <a href="#home"><img src="img/home.png"/></a>
    <a href="#profile"><img src="img/profile.png"/></a>
    <a href="#"><img src="img/logout.png"/></a>
  </nav>
    </div>`;
    const homePage=document.createElement('section');
    homePage.innerHTML=homeView;

    const dataMovie = pelicula.pelicula;
    // const viewTerror = document.getElementById("imgTerror");
    // const viewAccion = document.getElementById("imgAccion");
    // const viewSuspenso = document.getElementById("imgSuspenso");
    // const viewComedia = document.getElementById("imgComedia");


    dataMovie.filter(movie => movie.gender === "Terror").forEach(gender=>{
      let genderMatch = document.createElement("div");
      genderMatch.innerHTML = `<img class="imgHome" src="${gender.imgHome}">`;
      homePage.appendChild(genderMatch);
    });
    dataMovie.filter(movie => movie.gender === "Acción").forEach(gender=>{
      let genderMatch = document.createElement("div");
      genderMatch.innerHTML = `<img class="imgHome" src="${gender.imgHome}">`;
      homePage.appendChild(genderMatch);
    });
    dataMovie.filter(movie => movie.gender === "Suspenso").forEach(gender=>{
      let genderMatch = document.createElement("div");
      genderMatch.innerHTML = `<img class="imgHome" src="${gender.imgHome}">`;
      homePage.appendChild(genderMatch);
    });
    dataMovie.filter(movie => movie.gender === "Comedia").forEach(gender=>{
      let genderMatch = document.createElement("div");
      genderMatch.innerHTML = `<img class="imgHome" src="${gender.imgHome}">`;
      homePage.appendChild(genderMatch);
    });

    return homePage;
}