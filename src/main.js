import { changeRoute } from "./lib/controllers/route.js";
import { hrefContent, routes } from "./lib/views/Components.js";

const container = document.getElementById("root");
const pathname = window.location.pathname;
container.appendChild(routes[pathname]());

window.addEventListener("hashchange", () => {
  const link = window.location.hash;
  console.log("hash change", link);

  changeRoute(link);
  container.innerHTML = "";
  container.appendChild(hrefContent[link]());
});

window.addEventListener("popstate", () => {
  const pathname = window.location.pathname;
  console.log("path name change", pathname);

  container.innerHTML = "";
  container.appendChild(routes[window.location.pathname]());
});

var dCounters = document.querySelectorAll('.CountLike');
[].forEach.call(dCounters, function(dCounter) {
    var el = dCounter.querySelector('button');
    var cId = dCounter.id;
    var dDatabase = firebase.database().ref('Like Number Counter').child(cId);

    // get firebase data
    dDatabase.on('value', function(snap) {
        var data = snap.val() || 0;
        dCounter.querySelector('span').innerHTML = data;
    });

    // set firebase data
    el.addEventListener('click', function() {
        dDatabase.transaction(function(dCount) {
            return (dCount || 0) + 1;
        });
    });
});