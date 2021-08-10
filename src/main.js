import register from './lib/views/register.js';
import {changePath, changeView } from './lib/controllers/route.js';
import components from './lib/views/Components.js';

window.addEventListener('hashchange',()=>changeView(window.location.hash));
window.addEventListener('popstate',()=>changePath(window.location.pathname));
console.log(window.location.pathname);
if(window.location.pathname ==='/home'){
    console.log(window.location.pathname);
    document.getElementById("root").appendChild(components['#home']);
}
if(window.location.pathname ==='/profile'){
    document.getElementById("root").appendChild(components['#profile']);
}
document.getElementById("root").appendChild(register());

