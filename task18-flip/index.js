document.addEventListener("DOMContentLoaded", (e) => {
    const game = document.querySelector(".game-container");
    const body = document.querySelector("body");
    const sky = document.querySelector(".sky");
    const ground = document.querySelector(".ground");
    const bird = document.createElement("div");
    let birdTop = 250;
    let birdLeft = 80;
    let gravit = 2;
    let timer;

    function createBird() {
        bird.classList.add("bird");
        bird.style.top = birdTop + "px";
        bird.style.left = birdLeft + "px";
        game.appendChild(bird);
    }

    function gameOver() {
        console.log("игра окончена");
    }

    function gravity() {
        timer = setInterval(() => {
            birdTop += gravit;
            bird.style.top = birdTop + "px";
            if (birdTop + 42 > 400) {
                clearInterval(timer);
                gameOver();
            }
        }, 30);
    }

    function startGame() {
        createBird();
        gravity();
        body.addEventListener("click", (e) => {
            birdTop -= 30;
            bird.style.top = birdTop + "px";
        });
    }

    startGame();
});
