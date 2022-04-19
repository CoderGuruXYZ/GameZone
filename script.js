if ((document.URL).includes("allgames.html")) {
    loadAll(document.querySelector(".gamesList"));
}

if ((document.URL).includes("recommended.html")) {
    loadRecommended(document.querySelector(".gamesList"));
}

if ((document.URL).includes("2d.html")) {
    load2D(document.querySelector(".gamesList"));
}

if ((document.URL).includes("3d.html")) {
    load3D(document.querySelector(".gamesList"));
}