export const navbar=()=>{
    const navbarMovil=`<div id="navbarContainer">
    <div id="navbar">
      <div id="bubbleWrapper">
        <div id="bubble1" class="bubble"><span class="icon"><i class="fas fa-home"></i></span></div>
        <div id="bubble2" class="bubble"><span class="icon"><i class="far fa-user-circle"></i></span></div>
        <div id="bubble3" class="bubble"><span class="icon"><i class="fas fa-sign-out-alt"></i></span></div>
      </div>
      <div id="menuWrapper">
        <div id="menu1" class="menuElement"><i class="fas fa-home"></i></div>
        <div id="menu2" class="menuElement"><i class="far fa-user-circle"></i></div>
        <div id="menu3" class="menuElement"><i class="fas fa-sign-out-alt"></i></div>
      </div>
    </div>
    <svg id="bgWrapper">
      <div id="bg"></div>
      <div id="bgBubble1"></div>
      <div id="bgBubble2"></div>
      <div id="bgBubble3"></div>
    </svg>
  </div>`
    const navBar=document.createElement('section');
    navBar.innerHTML=navbarMovil;
    return navBar;
}