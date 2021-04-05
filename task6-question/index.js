const parent = document.querySelector(".faq-content");
const openBtn = document.querySelectorAll(".open");
const closeBtn = document.querySelectorAll(".close");

function openAnswer(e) {
    const parent = e.path[2];
    parent.classList.add("active");
}

function closeAnswer(e) {
    const parent = e.path[2];
    parent.classList.remove("active");
}

openBtn.forEach((elem) => {
    elem.addEventListener("click", openAnswer);
});

closeBtn.forEach((elem) => {
    elem.addEventListener("click", closeAnswer);
});
