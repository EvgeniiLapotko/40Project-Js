const users = [
    {
        id: 1,
        name: "katy",
        job: "disigner",
        img: "images/user1.jpg",
        text: "it is greet",
    },
    {
        id: 2,
        name: "stiven",
        job: "progger",
        img: "images/user2.jpg",
        text: "it is like",
    },
    {
        id: 3,
        name: "bill",
        job: "student",
        img: "images/user3.jpg",
        text: "it is working",
    },
    {
        id: 4,
        name: "tom",
        job: "student",
        img: "images/user1.jpg",
        text: "i am here",
    },
];

const nameUser = document.querySelector(".name-user");
const work = document.querySelector(".work");
const userAvatar = document.querySelector(".user-avatar");
const text = document.querySelector(".text");
const btns = document.querySelectorAll(".btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", (e) => {
    getUsers();
});

function getUsers() {
    let user = users[currentItem];
    nameUser.textContent = user.name;
    work.textContent = user.job;
    userAvatar.src = user.img;
    text.textContent = user.text;
}

btns.forEach((elem) => {
    elem.addEventListener("click", (e) => {
        const style = e.currentTarget.classList;
        if (style.contains("prev")) {
            currentItem--;
            if (currentItem < 0) {
                currentItem = users.length - 1;
            }
            getUsers();
        } else if (style.contains("next")) {
            currentItem++;
            if (currentItem > users.length - 1) {
                currentItem = 0;
            }
            getUsers();
        } else {
            currentItem = Math.floor(Math.random() * users.length);
            getUsers();
        }
    });
});
