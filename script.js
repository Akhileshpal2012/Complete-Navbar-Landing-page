document.addEventListener("DOMContentLoaded", () => {
    let openMenu = document.getElementById('menuIcon');
    let closeMenu = document.getElementById('closeIcon');
    let navMenu = document.getElementById('navMenu');

    openMenu.addEventListener("click", () => {
        navMenu.style.right = "0px";
    })

    closeMenu.addEventListener("click", () => {
        navMenu.style.right = "-45%"
    })

})