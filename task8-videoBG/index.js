const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", (e) => {
    preloader.classList.add("hide");
});

btn.addEventListener("click", (e) => {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause();
    } else {
        btn.classList.remove("slide");
        video.play();
    }
});
