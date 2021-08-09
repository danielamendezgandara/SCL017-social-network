import components from "../views/components.js";

const page=document.getElementById('root');

const changeRoute=(route)=>{
    const hash=route.replace(/#/g,'');
    console.log("changeRoute");
    window.history.replaceState({},hash,'/'+`${hash}`);
}

export const changePath=(path)=>{
    const view=path.replace('/','#');
    page.innerHTML='';
    /*onAuthStateChange
    /*if(user){
       window.location.hash=''
    }*/
    console.log("changePath");
    page.appendChild(components[view]);

 }

export const changeView=(route)=>{
   console.log("changeView");
   page.innerHTML='';
   page.appendChild(components[route]);
   changeRoute(route);
};