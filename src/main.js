import register from './lib/views/register.js';
import {changePath, changeView } from './lib/controllers/route.js';

window.addEventListener('hashchange',()=>changeView(window.location.hash));
window.addEventListener('popstate',()=>changePath(window.location.pathname));
document.getElementById("root").appendChild(register());

