const menu = [
    {
        id: 1,
        title: "Name product",
        img: "img/img1.jpg",
        price: "$10",
        text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,aspernatur! Iure culpa qui dicta illum dolorem dolorum voluptas quaerat molestiae.",
    },
    {
        id: 1,
        title: "Name product",
        img: "img/img1.jpg",
        price: "$10",
        text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,aspernatur! Iure culpa qui dicta illum dolorem dolorum voluptas quaerat molestiae.",
    },
    {
        id: 2,
        title: "Name product",
        img: "img/img2.jpg",
        price: "$10",
        text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,aspernatur! Iure culpa qui dicta illum dolorem dolorum voluptas quaerat molestiae.",
    },
    {
        id: 2,
        title: "Name product",
        img: "img/img2.jpg",
        price: "$10",
        text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,aspernatur! Iure culpa qui dicta illum dolorem dolorum voluptas quaerat molestiae.",
    },
    {
        id: 3,
        title: "Name product",
        img: "img/img3.jpg",
        price: "$10",
        text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,aspernatur! Iure culpa qui dicta illum dolorem dolorum voluptas quaerat molestiae.",
    },
    {
        id: 3,
        title: "Name product",
        img: "img/img3.jpg",
        price: "$10",
        text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,aspernatur! Iure culpa qui dicta illum dolorem dolorum voluptas quaerat molestiae.",
    },
    {
        id: 3,
        title: "Name product",
        img: "img/img3.jpg",
        price: "$10",
        text:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,aspernatur! Iure culpa qui dicta illum dolorem dolorum voluptas quaerat molestiae.",
    },
];

const section = document.querySelector(".section__menu");
const btnFilter = document.querySelectorAll(".btn");

window.addEventListener("DOMContentLoaded", (e) => {
    displayMenuRender(menu);
});

function displayMenuRender(menuItem) {
    let displayMenu = menuItem.map((item) => {
        return `<div class="section__menu-item">
            <div class="section__menu-img">
                <img class='img' src=${item.img} alt="img1">
            </div>
            <div class="section__menu-info">
                <div class="header">
                    <h4 class="section__menu-title">${item.title}</h4>
                    <div class="section__menu-price">${item.price}</div>
                </div>
                <div class="section__menu-text">${item.text}</div>
            </div>
        </div>`;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
}

btnFilter.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter((item) => {
            return item.id == category;
        });
        if (category === "all") {
            displayMenuRender(menu);
        } else {
            displayMenuRender(menuCategory);
        }
    });
});
