import components from "../views/Components.js";

const page=document.getElementById('root');

const changeRoute=(route)=>{
    const hash=route.replace(/#/g,'');
    window.history.replaceState({},hash,'/'+`${hash}`);
}

export const changePath=(path)=>{
    const view=path.replace('/','#');
    page.innerHTML='';
    /*onAuthStateChange
    /*if(user){
       window.location.hash=''
    }*/
    page.appendChild(components[view]);

 }

export const changeView=(route)=>{
   page.innerHTML='';
   page.appendChild(components[route]);
   changeRoute(route);
};