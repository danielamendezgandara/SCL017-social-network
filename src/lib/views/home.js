export default ()=>{
    const homeView=`<div>
    <a href="#profile">profile</a>
    <section class="carousel">
    <ul>
      <li><img src="imgMovie/anabelle.jpg" alt=""></li>
      <li><img src="imgMovie/infinitywar.jpg" alt=""></li>
      <li><img src="imgMovie/interestelar.jpg" alt=""></li>
      <li><img src="imgMovie/joker.jpg" alt=""></li>
      <li><img src="imgMovie/toystory4.jpg" alt=""></li>
    </ul>
  </section>
    </div>`;
    const homePage=document.createElement('section');
    homePage.innerHTML=homeView;
    return homePage;
}