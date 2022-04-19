document.querySelector(".searchInput").addEventListener("change", function () {
    var searchLink = window.origin + 'search.html?query=' + document.querySelector(".searchInput").value;

    window.location.href = searchLink;
});
