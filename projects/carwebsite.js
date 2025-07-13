const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector('.nav-links');
const homeBtn = document.querySelector('.active');

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-menu");
});

homeBtn.addEventListener("click", () => {
    navLinks.classList.remove("mobile-menu");
});