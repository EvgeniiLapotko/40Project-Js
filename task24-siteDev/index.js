

const timer = document.querySelector(".timer");
const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".cart p");

let futureDay = new Date(2021, 9, 1, 12, 00, 00);

const year = futureDay.getFullYear();
const hour = futureDay.getHours();
const minute = futureDay.getMinutes();
const second = futureDay.getSeconds();
const day = futureDay.getDate();

giveaway.textContent = `Релиз ${year} ${day} Августа ПН ${hour} : ${minute<10 ? `0${minute}` : minute} : 0${second}`;

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