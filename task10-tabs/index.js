const container = document.querySelector(".tabs");
const btns = document.querySelectorAll(".btn");
const content = document.querySelectorAll(".content");

container.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        content.forEach((elem) => {
            elem.classList.remove("active");
            const element = document.getElementById(id);
            element.classList.add("active");
        });
    }
});
