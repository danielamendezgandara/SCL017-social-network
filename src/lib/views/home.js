import pelicula from "../../data/pelicula.js";
//import { getMovieInfo } from "../controllers/movieView-controller.js";

const movieClicked=[];


export default ()=>{
    const homeView=`<div id="home" class="home">
    <div class="one"><img class="img-logo2" src="img/logo.png"></div>
    <div class ="two">
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
    </div>
    <div class="four">
      <section class="category-1">
        <p class="category-text">Terror</p>
        <p class="showAll">Ver todo</p>
        <div id="imgTerror" class=viewMovie></div>        
      </section>
    </div>
    <div class="six">
       <section class="category-2">
        <p class="category-text">Acción</p>
        <p class="showAll">Ver todo</p>
        <div id="imgAccion" class=viewMovie></div>   
      </section>
    </div>
    <div class="eight">
      <section class="category-3">
        <p class="category-text">Suspenso</p>
        <p class="showAll">Ver todo</p>
        <div id="imgSuspenso" class=viewMovie></div> 
      </section>
    </div>
    <div class="ten">  
      <section class="category-4">
        <p class="category-text">Comedia</p>
        <p class="showAll">Ver todo</p>
        <div id="imgComedia" class=viewMovie></div> 
      </section>
    </div>  
  <nav>
    <div id=navBar >
      <div class="three"><a href="#home"><img src="img/home.png"/></a></div>
      <div class="five"><a href="#profile"><img src="img/profile.png"/></a></div>
      <div class="seven" style="display:none"></div>
      <div class="nine"><a href="#"><img src="img/logout.png"/></a></div>
    </div>
  </nav>
    </div>`;

    const homePage=document.createElement('div');
    homePage.innerHTML=homeView;

    const dataMovie = pelicula.pelicula;
    const viewTerror = homePage.querySelector("#imgTerror");
    const viewAccion = homePage.querySelector("#imgAccion");
    const viewSuspenso = homePage.querySelector("#imgSuspenso");
    const viewComedia = homePage.querySelector("#imgComedia");


    dataMovie.filter(movie => movie.gender === "Terror").forEach(gender=>{
      const genderMatch = document.createElement("div");
      genderMatch.innerHTML = `<a href="#movie"><img class="imgHome" src="${gender.imgHome}"></a>`;
      genderMatch.dataset.name=`${gender.name}`;
      genderMatch.className='movieElement';
      viewTerror.appendChild(genderMatch);
    });
    dataMovie.filter(movie => movie.gender === "Acción").forEach(gender=>{
      const genderMatch = document.createElement("div");
      genderMatch.className='movieElement';
      genderMatch.dataset.name=`${gender.name}`;
      genderMatch.innerHTML = `<a href="#movie"><img class="imgHome" src="${gender.imgHome}"></a>`;
      viewAccion.appendChild(genderMatch);
    });
    dataMovie.filter(movie => movie.gender === "Suspenso").forEach(gender=>{
      const genderMatch = document.createElement("div");
      genderMatch.className='movieElement';
      genderMatch.dataset.name=`${gender.name}`;
      genderMatch.innerHTML = `<a href="#movie"><img class="imgHome" src="${gender.imgHome}"></a>`;
      viewSuspenso.appendChild(genderMatch);
    });
    dataMovie.filter(movie => movie.gender === "Comedia").forEach(gender=>{
      const genderMatch = document.createElement("div");
      genderMatch.dataset.name=`${gender.name}`;
      genderMatch.className='movieElement';
      genderMatch.innerHTML = `<a href="#movie"><img class="imgHome" src="${gender.imgHome}"></a>`;
      viewComedia.appendChild(genderMatch);
    });

    const dataSetMovie=homePage.querySelectorAll('.movieElement');
    dataSetMovie.forEach(element => element.addEventListener('click',(e)=>{
      const event=e.currentTarget.dataset.name;
      getMovieInfo(event);
      console.log(event);
      
    }))
    
    return homePage;
}


const getMovieInfo=(movieSelect)=>{
      return movieClicked.push(movieSelect);
}

export  {movieClicked}
