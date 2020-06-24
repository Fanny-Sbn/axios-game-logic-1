import { pageLoader } from "./page-loader.js";
import { listenIntroEvents } from "./event-intro.js";
import { listenGameEvents } from "./event-game.js";

// GAME VARS
const states = [
  {
    html: "views/intro.html",
    css: "styles/intro.css",
    js: listenIntroEvents,
  },
  {
    html: "views/game.html",
    css: "styles/game.css",
    js: listenGameEvents,
  },
  {
    html: "views/outro.html",
    css: "styles/outro.css",
  }
];

// INITIAL GAME LOGIC

function displayView(html) {
  document.getElementById("board").innerHTML = html;
  document.getElementById("dynamic-css").href = states[index].css;
  states[index].js(options, loadPage); // loadPage va être rappelé
}

function loadPage(index, options) {
  pageLoader(states[index].html, displayView);
}

loadPage(0, null);
