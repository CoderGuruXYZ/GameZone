document.querySelector(".searchInput").addEventListener("change", function () {
    document.querySelector(".stuff").innerHTML = "";

    var pillow = document.createElement("div");
    pillow.classList.add("pillow");
    document.querySelector(".stuff").appendChild(pillow);

    var gamesList = document.createElement("div");
    gamesList.classList.add("gamesList");
    document.querySelector(".stuff").appendChild(gamesList);

    if (document.URL.includes("index.html") || document.URL.includes("allgames.html")) {
        loadAll(document.querySelector(".gamesList"));
    } else if (document.URL.includes("recommended.html")) {
        loadRecommended(document.querySelector(".gamesList"));
    } else if (document.URL.includes("2d.html")) {
        load2D(document.querySelector(".gamesList"));
    } else if (document.URL.includes("3d.html")) {
        load3D(document.querySelector(".gamesList"));
    }

    sortGames(document.querySelector(".searchInput"), document.querySelector(".gamesList"), document.querySelectorAll(".gameItem"));

    var error = document.createElement("div");
    error.classList.add("gameError");
    error.innerHTML = '<i class="fas fa-sad-tear"></i>&nbsp;No Results';

    document.querySelector(".gamesList").appendChild(error);

    if ($('.gameItem:visible').length) {
        document.querySelector(".gameError").remove();
    }

    var pillow2 = document.createElement("div");
    pillow2.classList.add("pillow");
    document.querySelector(".stuff").appendChild(pillow2);
});