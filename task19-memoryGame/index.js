document.addEventListener("DOMContentLoaded", (e) => {
    const cartArray = [
        {
            name: "fries",
            img: "img/fries.png",
        },
        {
            name: "fries",
            img: "img/fries.png",
        },
        {
            name: "cheeseburger",
            img: "img/cheeseburger.png",
        },
        {
            name: "cheeseburger",
            img: "img/cheeseburger.png",
        },
        {
            name: "hotdog",
            img: "img/hotdog.png",
        },
        {
            name: "hotdog",
            img: "img/hotdog.png",
        },
        {
            name: "ice-cream",
            img: "img/ice-cream.png",
        },
        {
            name: "ice-cream",
            img: "img/ice-cream.png",
        },
        {
            name: "milkshake",
            img: "img/milkshake.png",
        },
        {
            name: "milkshake",
            img: "img/milkshake.png",
        },
        {
            name: "pizza",
            img: "img/pizza.png",
        },
        {
            name: "pizza",
            img: "img/pizza.png",
        },
    ];

    cartArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector(".grid");
    const result = document.querySelector("#result");
    function createBoard() {
        for (let i = 0; i < cartArray.length; i++) {
            const card = document.createElement("img");
            card.setAttribute("src", "img/blank.png");
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipCard);
            grid.appendChild(card);
        }
    }

    createBoard();
    let cardChosen = [];
    let cardChosenId = [];
    let cardsWon = [];
    let score = 0;

    function checkForMatch() {
        const cards = document.querySelectorAll("img");
        const optionOneId = cardChosenId[0];
        const optionTwoId = cardChosenId[1];
        if (cardChosen[0] === cardChosen[1]) {
            alert("good");
            cards[optionOneId].setAttribute("src", "img/white.png");
            cards[optionTwoId].setAttribute("src", "img/white.png");
            cardsWon.push(cardChosen);
            console.log(cardsWon);
            score++;
            result.textContent = score;
        } else {
            cards[optionOneId].setAttribute("src", "img/blank.png");
            cards[optionTwoId].setAttribute("src", "img/blank.png");
            alert("sorry.try again");
        }

        cardChosen = [];
        cardChosenId = [];
        if (cardsWon.length === cartArray.length / 2) {
            alert("you win");
        }
    }

    function flipCard() {
        let cardId = this.getAttribute("data-id");

        cardChosen.push(cartArray[cardId].name);
        cardChosenId.push(cardId);
        this.setAttribute("src", cartArray[cardId].img);
        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
});
