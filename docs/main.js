import { changeRoute } from "./controllers/route.js";
import { hrefContent, routes } from "./views/components.js"; 


const container = document.getElementById("root");

const pathname = window.location.pathname;
container.innerHTML = routes[pathname];

window.addEventListener("hashchange", () => {
  const link = window.location.hash;
  console.log("hash change", link);

  changeRoute(link);
  container.innerHTML = "";
  container.innerHTML = hrefContent[link];
});

window.addEventListener("popstate", () => {
  const pathname = window.location.pathname;
  console.log("path name change", pathname);

  container.innerHTML = "";
  container.innerHTML = routes[window.location.pathname];
});

