const link = document.querySelector("#link");
const check = document.querySelector(".input_check");

if (localStorage.getItem("theme") == "true") {
    link.setAttribute("href", "style-dark.css");
    check.checked = true;
}

check.addEventListener("change", (e) => {
    if (e.target.checked) {
        link.setAttribute("href", "style-dark.css");
        localStorage.setItem("theme", true);
    } else {
        link.setAttribute("href", "style.css");
        localStorage.setItem("theme", false);
    }
});
