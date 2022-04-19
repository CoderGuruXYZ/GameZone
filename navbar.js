if (!document.URL.includes("html")) {
    window.location.href = "index.html";
}

var nav = document.querySelector("nav");
nav.innerHTML = "";

var logo = document.createElement("div");
logo.classList.add("navPiece");
logo.classList.add("logo");

var logoa = document.createElement("a");
logoa.href = "index.html";
logoa.innerHTML = '<i class="fas fa-gamepad"></i>&nbsp;GameZone';

logo.appendChild(logoa);

nav.appendChild(logo)

if (document.URL.includes("index.html") || document.URL.includes("allgames.html") || document.URL.includes("recommended.html") || (document.URL).includes("2d.html") || (document.URL).includes("3d.html")) {
    var searchPiece = document.createElement("div");
    searchPiece.classList.add("navPiece");

    var searchBar = document.createElement("div");
    searchBar.classList.add("searchBar");
    searchBar.innerHTML = '<input placeholder="Search Games..." class="searchInput"><i class="fas fa-search"></i>';

    searchPiece.appendChild(searchBar);

    nav.appendChild(searchPiece);
}

var links = ["All Games", "Recommended", "2D", "3D"];
var hrefs = ["allgames.html", "recommended.html", "2d.html", "3d.html"];

for (i = 0; i < links.length; i++) {
    var navBarPiece = document.createElement("div");
    navBarPiece.classList.add("navBarPiece");

    var navBarPiecea = document.createElement("a");
    navBarPiecea.href = hrefs[i];
    navBarPiecea.innerHTML = links[i];

    navBarPiece.appendChild(navBarPiecea);

    nav.appendChild(navBarPiece);
}