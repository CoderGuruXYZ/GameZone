document.querySelector(".searchInput").addEventListener("change", function () {
    window.location.href = "search.html/"

    var searchLink = window.origin + 'search.html?query=' + document.querySelector(".searchInput").value;
});