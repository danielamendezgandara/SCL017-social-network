import components from "../views/components.js";

const page=document.getElementById('root');

const changeRoute=(route)=>{
    const hash=route.replace(/#/g,'');
    const hashpath='/'+hash;
    console.log(hashpath);
    window.history.replaceState({},hash,hashpath);
}

export const changePath=(path)=>{
   console.log(path);
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