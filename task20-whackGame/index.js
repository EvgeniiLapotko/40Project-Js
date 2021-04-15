const square = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const time = document.querySelector(".time");
let score = document.querySelector(".score");
let hitPosition;
let currentTime = 60;
let result = 0;

function randomSquere() {
    square.forEach((item) => {
        item.classList.remove("mole");
    });
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");
    hitPosition = randomPosition.id;
}

square.forEach((id) => {
    id.addEventListener("mouseup", () => {
        if (id.id === hitPosition) {
            result++;
            score.textContent = result < 10 ? `0${result}` : result;
        }
    });
});

function moveMole() {
    let timerId = setInterval(randomSquere, 1000);
}

function countDown() {
    currentTime--;
    time.textContent = currentTime;
    if (currentTime === 0) {
        clearInterval(timerId);
        alert("Игра окончена. Вы набрали " + result);
    }
}

let timerId = setInterval(countDown, 1000);

moveMole();
