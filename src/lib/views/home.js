// import pelicula from "../../data/pelicula.js";

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
        <div class=viewMovie>
         <img class="imgHome" src="data/imgHome/bloodHome.jpg">
         <img class="imgHome" src="data/imgHome/fearStreetHome.jpg">    
         <img class="imgHome" src="data/imgHome/laManoHome.jpg"> 
         </div>        
      </section>
    </div>
    <div class="six">
       <section class="category-2">
        <p class="category-text">Acción</p>
        <p class="showAll">Ver todo</p>
        <div class=viewMovie>
          <img class="imgHome" src="data/imgHome/blackWidowHome.jpg">
          <img class="imgHome" src="data/imgHome/avaHome.jpg">    
          <img class="imgHome" src="data/imgHome/joltHome.jpg"> 
          </div>   
      </section>
    </div>
    <div class="eight">
      <section class="category-3">
        <p class="category-text">Suspenso</p>
        <p class="showAll">Ver todo</p>
        <div class=viewMovie>
        <img class="imgHome" src="data/imgHome/oxygenHome.jpg">
        <img class="imgHome" src="data/imgHome/girlNextHome.jpg">    
        <img class="imgHome" src="data/imgHome/theParamedicHome.jpg"> 
        </div> 
      </section>
    </div>
    <div class="ten">  
      <section class="category-4">
      <p class="category-text">Comedia</p>
      <p class="showAll">Ver todo</p>
      <div class=viewMovie>
        <img class="imgHome" src="data/imgHome/thunderForceHome.jpg">
        <img class="imgHome" src="data/imgHome/unidosHome.jpg">    
        <img class="imgHome" src="data/imgHome/howBecameHome.jpg"> 
          </div> 
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
    const homePage=document.createElement('section');
    homePage.innerHTML=homeView;
    return homePage;
}