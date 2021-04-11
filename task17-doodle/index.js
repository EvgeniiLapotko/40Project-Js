window.addEventListener("DOMContentLoaded", (e) => {
    const grid = document.querySelector(".grid");
    const doodle = document.createElement("div");
    const btn = document.querySelector(".start");
    let startPoint = 150;
    let doodleBottom = startPoint;
    let doodleLeft = 50;
    let countPlatform = 5;
    let isGameOver = false;
    let platforms = [];
    let upTimeId;
    let downTimeId;
    let isJumping = true;
    let isGoingLeft = false;
    let isGoingRight = false;
    let leftTimeId;
    let rightTimeId;
    let score = 0;

    function createDoodle() {
        grid.appendChild(doodle);
        doodle.classList.add("doodle");
        doodleLeft = platforms[0].left;
        doodle.style.bottom = doodleBottom + "px";
        doodle.style.left = doodleLeft + "px";
    }

    class Platform {
        constructor(newPlatformBottom) {
            this.bottom = newPlatformBottom;
            this.left = Math.random() * 315;
            this.visual = document.createElement("div");

            const visual = this.visual;
            visual.classList.add("platform");
            visual.style.bottom = this.bottom + "px";
            visual.style.left = this.left + "px";
            grid.appendChild(visual);
        }
    }

    function createPlatforms() {
        for (let i = 0; i <= countPlatform; i++) {
            let platformGap = 600 / countPlatform;
            let newPlatformBottom = 100 + i * platformGap;
            let newPlatform = new Platform(newPlatformBottom);
            platforms.push(newPlatform);
            console.log(platforms);
        }
    }

    function movePlatforms() {
        if (doodleBottom > 200) {
            platforms.forEach((platform) => {
                platform.bottom -= 4;
                let visual = platform.visual;
                visual.style.bottom = platform.bottom + "px";

                if (platform.bottom < 10) {
                    let firstPlatform = platforms[0].visual;
                    firstPlatform.classList.remove("platform");
                    platforms.shift();
                    score++;
                    let newPlatform = new Platform(720);
                    platforms.push(newPlatform);
                }
            });
        }
    }

    function fall() {
        clearInterval(upTimeId);
        isJumping = false;
        downTimeId = setInterval(() => {
            doodleBottom -= 5;
            doodle.style.bottom = doodleBottom + "px";
            if (doodleBottom <= 0) {
                gameOver();
            }

            platforms.forEach((platform) => {
                if (
                    doodleBottom >= platform.bottom &&
                    doodleBottom <= platform.bottom + 15 &&
                    doodleLeft + 60 >= platform.left &&
                    doodleLeft <= platform.left + 85 &&
                    !isJumping
                ) {
                    console.log("jumps");
                    startPoint = doodleBottom;

                    jump();
                }
            });
        }, 30);
    }

    function gameOver() {
        console.log("game over");
        isGameOver = true;
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }
        grid.innerHTML = score;
        clearInterval(upTimeId);
        clearInterval(downTimeId);
        clearInterval(leftTimeId);
        clearInterval(rightTimeId);
    }

    function jump() {
        clearInterval(downTimeId);
        isJumping = true;
        upTimeId = setInterval(() => {
            doodleBottom += 20;
            doodle.style.bottom = doodleBottom + "px";
            if (doodleBottom > startPoint + 200) {
                fall();
            }
        }, 30);
    }

    function controls(e) {
        if (e.key === "ArrowLeft") {
            moveLeft();
            console.log("left");
        } else if (e.key === "ArrowRight") {
            moveRight();
            console.log("right");
        } else if (e.key === "ArrowUp") {
            moveStright();
            console.log("up");
        }
    }

    function moveStright() {
        isGoingRight = false;
        isGoingLeft = false;
        clearInterval(leftTimeId);
        clearInterval(rightTimeId);
    }

    function moveLeft() {
        if (isGoingRight) {
            clearInterval(rightTimeId);
            isGoingRight = false;
        }
        isGoingLeft = true;
        leftTimeId = setInterval(() => {
            if (doodleLeft >= 0) {
                doodleLeft -= 5;
                doodle.style.left = doodleLeft + "px";
            } else {
                moveRight();
            }
        }, 20);
    }

    function moveRight() {
        if (isGoingLeft) {
            clearInterval(leftTimeId);
            isGoingLeft = false;
        }
        isGoingRight = true;
        rightTimeId = setInterval(() => {
            if (doodleLeft + 60 <= 400) {
                doodleLeft += 5;
                doodle.style.left = doodleLeft + "px";
            } else {
                moveLeft();
            }
        }, 20);
    }

    function start() {
        if (!isGameOver) {
            createPlatforms();
            createDoodle();
            setInterval(movePlatforms, 30);
            jump();
            document.addEventListener("keyup", controls);
        }
    }

    btn.addEventListener("click", (e) => {
        isGameOver = false;
        start();
        btn.style.opacity = 0;
    });
});
