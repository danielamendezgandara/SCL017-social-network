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
        <div class=viewMovie>
         <img class="imgHome" src="data/imgHome/bloodHome.jpg">
         <img class="imgHome" src="data/imgHome/fearStreetHome.jpg">    
         <img class="imgHome" src="data/imgHome/laManoHome.jpg"> 
         </div>        
    </section>
  <section class="category-2">
     <p class="category-text">Acción</p>
      <p class="showAll">Ver todo</p>
        <div class=viewMovie>
          <img class="imgHome" src="data/imgHome/blackWidowHome.jpg">
          <img class="imgHome" src="data/imgHome/avaHome.jpg">    
          <img class="imgHome" src="data/imgHome/joltHome.jpg"> 
          </div>   
    </section>
  <section class="category-3">
    <p class="category-text">Suspenso</p>
      <p class="showAll">Ver todo</p>
      <div class=viewMovie>
      <img class="imgHome" src="data/imgHome/oxygenHome.jpg">
      <img class="imgHome" src="data/imgHome/girlNextHome.jpg">    
      <img class="imgHome" src="data/imgHome/theParamedicHome.jpg"> 
      </div> 
   </section>
   <section class="category-4">
    <p class="category-text">Comedia</p>
      <p class="showAll">Ver todo</p>
      <div class=viewMovie>
      <img class="imgHome" src="data/imgHome/thunderForceHome.jpg">
      <img class="imgHome" src="data/imgHome/unidosHome.jpg">    
      <img class="imgHome" src="data/imgHome/howBecameHome.jpg"> 
      </div> 
  </section>
  <nav>
    <div id=navBar >
    <a href="#home"><img src="img/home.png"/></a>
    <a href="#profile"><img src="img/profile.png"/></a>
    <a href="#"><img src="img/logout.png"/></a>
    </div>
  </nav>
    </div>`;
    const homePage=document.createElement('section');
    homePage.innerHTML=homeView;
    return homePage;
}