const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var query = urlParams.get('query');

// var pillow = document.createElement("div");
// pillow.classList.add("pillow");
// document.querySelector(".stuff").appendChild(pillow);

var gamesList = document.createElement("div");
gamesList.classList.add("gamesList");
document.querySelector(".stuff").appendChild(gamesList);

loadAll(document.querySelector(".gamesList"));

sortGames(query, document.querySelector(".gamesList"), document.querySelectorAll(".gameItem"));

document.querySelector(".header").innerHTML = "Search Results for '" + query + "'"; 

var error = document.createElement("div");
error.classList.add("gameError");
error.innerHTML = '<i class="fas fa-sad-tear"></i>&nbsp;No Results';

document.querySelector(".gamesList").appendChild(error);

if ($('.gameItem:visible').length) {
    document.querySelector(".gameError").remove();
}

// var pillow2 = document.createElement("div");
// pillow2.classList.add("pillow");
// document.querySelector(".stuff").appendChild(pillow2);
