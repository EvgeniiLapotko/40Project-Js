const burger = document.querySelector(".burger__menu");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
});
