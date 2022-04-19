var database = {
    "1": {
        img: "thumbnails/tictactoe.jpg",
        name: "Tic-Tac-Toe",
        url: "tictactoe.html",
        dimension: "2D",
    },
    "2": {
        img: "thumbnails/maze.jpg",
        name: "Maze",
        url: "maze.html",
        dimension: "2D",
    },
    "3": {
        img: "thumbnails/cuberush.jpg",
        name: "Cube Rush",
        url: "cuberush.html",
        dimension: "3D",
    },
};

function generateGame(img, name, url, parent) {
    var gameItem = document.createElement("a");
    gameItem.classList.add("gameItem");
    gameItem.href = url;
    gameItem.style.cursor = "pointer";
    gameItem.style.textDecoration = "none";

    var gameImg = document.createElement("img");
    gameImg.classList.add("gameImg");
    gameImg.href = url;
    gameImg.src = img;

    gameItem.appendChild(gameImg);

    var gameName = document.createElement("div");
    gameName.classList.add("gameName");
    gameName.innerHTML = name;

    gameItem.appendChild(gameName);

    parent.appendChild(gameItem);
}

function loadAll(parent) {
    var keys = Object.keys(database);
    var test = keys.reverse();

    for (i = 0; i < test.length; i++) {
        generateGame(database[test[i]].img, database[test[i]].name, database[test[i]].url, parent);
    }
}

function sortGames(input2, ul2, li2) {
    var i;
    var input = input2;
    var filter = input.value.toLowerCase();
    var ul = ul2;
    var li = li2;
    for (i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("div")[0];
        var txtValue = a.textContent || a.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}

function loadRecommended(parent) {
    var recommendedKeys = ["2", "3"];

    for (i = 0; i < recommendedKeys.length; i++) {
        generateGame(database[recommendedKeys[i]].img, database[recommendedKeys[i]].name, database[recommendedKeys[i]].url, parent)
    }
}

function load2D(parent) {
    var keys = Object.keys(database);

    for (i = 0; i < keys.length; i++) {
        if (database[keys[i]].dimension == "2D") {
            generateGame(database[keys[i]].img, database[keys[i]].name, database[keys[i]].url, parent);
        }
    }
}

function load3D(parent) {
    var keys = Object.keys(database);

    for (i = 0; i < keys.length; i++) {
        if (database[keys[i]].dimension == "3D") {
            generateGame(database[keys[i]].img, database[keys[i]].name, database[keys[i]].url, parent);
        }
    }
}