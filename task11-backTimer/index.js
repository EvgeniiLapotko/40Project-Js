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

const timer = document.querySelector(".timer");
const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".cart p");

let futureDay = new Date(2022, 4, 24, 11, 30, 00);

const year = futureDay.getFullYear();
const hour = futureDay.getHours();
const minute = futureDay.getMinutes();
const second = futureDay.getSeconds();
const day = futureDay.getDate();

giveaway.textContent = `Ends ${year} ${day} May Mon ${hour} : ${minute} : 0${second}`;

const futureTime = futureDay.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = (t % oneDay) / oneHour;
    hours = Math.floor(hours);
    let minutes = (t % oneHour) / oneMinute;
    minutes = Math.floor(minutes);
    let seconds = (t % oneMinute) / 1000;
    seconds = Math.floor(seconds);

    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        } else {
            return item;
        }
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    });
    if (t < 0) {
        clearInterval(countDown);
    }
}

let countDown = setInterval(getRemainingTime, 1000);

getRemainingTime();
