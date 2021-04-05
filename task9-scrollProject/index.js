const header = document.querySelector(".header-top__wrap");

window.addEventListener("scroll", (e) => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 200) {
        header.classList.add("fixed__nav");
    } else {
        header.classList.remove("fixed__nav");
    }
});
