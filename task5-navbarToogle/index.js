const burger = document.querySelector(".burger__menu");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

close.addEventListener("click", () => {
    menu.classList.remove("active");
});
