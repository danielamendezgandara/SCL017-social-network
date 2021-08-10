import register from './lib/views/register.js';
import {changePath, changeView } from './lib/controllers/route.js';

window.addEventListener('hashchange',()=>changeView(window.location.hash));
window.addEventListener('popstate',()=>changePath(window.location.pathname));
document.getElementById("root").appendChild(register());



import {changeRoute} from './lib/controllers/route.js';
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

/*se debe borrar las primeras líneas de código hasta la línea 6, 
ya que las funciones se modificaron para que funcionaran en la recarga*/