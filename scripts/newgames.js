var keys = Object.keys(database);

var lastKeys = [keys[keys.length - 1], keys[keys.length - 2], keys[keys.length - 3], keys[keys.length - 4], keys[keys.length - 5], keys[keys.length - 6]];

for (i = 0; i < 6; i++) {
    generateGame(database[lastKeys[i]].img, database[lastKeys[i]].name, database[lastKeys[i]].url, document.querySelector(".gamesList"));
}