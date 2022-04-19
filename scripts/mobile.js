if (innerWidth < 900) {
    document.body.innerHTML = "";

    var unavailable = document.createElement("div");
    unavailable.classList.add("unavailable");
    unavailable.innerHTML = "Sorry, GameZone isn't Available for Mobile";
    document.body.appendChild(unavailable);
}