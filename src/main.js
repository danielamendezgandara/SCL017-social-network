import {changeRoute} from './lib/controllers/route.js';
//import { observeStatusUser } from './lib/models/modelFirebase.js';
import { hrefContent, routes } from './lib/views/Components.js';

const container=document.getElementById("root");
const pathname=window.location.pathname;

container.appendChild(routes[pathname]);

window.addEventListener('hashchange',()=>{
    const link=window.location.hash;
    changeRoute(link);
    container.innerHTML='';
    container.appendChild(hrefContent[link]);
    
});
window.addEventListener('popstate',()=>{
    container.innerHTML='';
    container.appendChild(routes[window.location.pathname]);
});

/*if (observeStatusUser() === true){
    if(window.location.pathname==='/home'){
        
        console.log(window.location.pathname);
    }
}else{
    console.log('No usuario activo');
}*/

