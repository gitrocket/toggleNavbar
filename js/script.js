// register elements //

var navToggle = document.getElementById('nav-toggle');
var menuContainer = document.querySelector(".menu-container");

navToggle.addEventListener("click", function() {
    if(menuContainer.classList.contains("show-menu")) {
        menuContainer.classList.remove("show-menu");
    } else {
        menuContainer.classList.add("show-menu");
    }
});