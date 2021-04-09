let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let noise = true;
let on = false;
let strict = false;
let win;

const power = document.querySelector("#on");
const strictBtn = document.querySelector("#strict");
const btn = document.querySelector(".btn");
const count = document.querySelector(".count_baner");
const topleft = document.querySelector(".topleft");
const topright = document.querySelector(".topright");
const bottomleft = document.querySelector(".bottomleft");
const bottomright = document.querySelector(".bottomright");

power.addEventListener("click", (e) => {
    if (power.checked == true) {
        on = true;
        count.textContent = "-";
    } else {
        on = false;
        count.textContent = "";
        clearColor();
        clearInterval(intervalId);
    }
});

strictBtn.addEventListener("click", (e) => {
    if (strictBtn.checked == true) {
        strict = true;
    } else {
        strict = false;
    }
});

btn.addEventListener("click", (e) => {
    if (on || win) {
        play();
    }
});

function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    count.textContent = 1;
    good = true;

    for (let i = 0; i < 20; i++) {
        let randomNum = Math.floor(Math.random() * 4) + 1;
        order.push(randomNum);
    }
    compTurn = true;
    intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
    on = false;
    if (flash == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }

    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) one();
            if (order[flash] == 2) two();
            if (order[flash] == 3) three();
            if (order[flash] == 4) four();
            flash++;
        }, 200);
    }
}

function one() {
    topleft.style.backgroundColor = "lightgreen";
}

function two() {
    topright.style.backgroundColor = "tomato";
}

function three() {
    bottomleft.style.backgroundColor = "lightyellow";
}

function four() {
    bottomright.style.backgroundColor = "skyblue";
}

function clearColor() {
    topleft.style.backgroundColor = "darkgreen";
    topright.style.backgroundColor = "red";
    bottomleft.style.backgroundColor = "yellow";
    bottomright.style.backgroundColor = "blue";
}

function flashColor() {
    topleft.style.backgroundColor = "lightgreen";
    topright.style.backgroundColor = "tomato";
    bottomleft.style.backgroundColor = "lightyellow";
    bottomright.style.backgroundColor = "skyblue";
}

topleft.addEventListener("click", (e) => {
    if (on) {
        playerOrder.push(1);
        check();
        one();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
topright.addEventListener("click", (e) => {
    if (on) {
        playerOrder.push(2);
        check();
        two();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
bottomleft.addEventListener("click", (e) => {
    if (on) {
        playerOrder.push(3);
        check();
        three();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
bottomright.addEventListener("click", (e) => {
    if (on) {
        playerOrder.push(4);
        check();
        four();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) {
        good = false;
    }
    if (playerOrder.length == 20 && good) {
        winGame();
    }

    if (good == false) {
        flashColor();
        count.textContent = "NO!";
        setTimeout(() => {
            count.textContent = turn;
            clearColor();
            if (strict) {
                play();
            } else {
                compTurn = true;
                flash = 0;
                playerOrder = [];
                good = true;
                intervalId = setInterval(gameTurn, 800);
            }
        }, 800);
    }

    if (turn == playerOrder.length && good && !win) {
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        count.textContent = turn;
        intervalId = setInterval(gameTurn, 800);
    }
}

function winGame() {
    flashColor();
    count.textContent = "WIN!";
    on = false;
    win = true;
}
