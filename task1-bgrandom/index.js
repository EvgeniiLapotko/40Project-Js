const body = document.querySelector('body');
const floor = document.querySelector('.floor')
const nameColor = document.querySelector('.color__name');
const btn = document.querySelector('.btn');
const hex = document.querySelector('.hex');
const simple = document.querySelector('.simple');
const opacityInput = document.querySelector('.opacityInput');


const colors = ['red', 'blue', 'orange', 'coral', 'pink','green'];
const colorsHex = ['#567', '#a45', '#f56', '#9f3']

let hexBtn = false;

function changeColor() {
    if(!hexBtn){
        const num = Math.floor(Math.random() * colors.length)
        console.log(num);
        floor.style.backgroundColor = colors[num];
        nameColor.textContent = colors[num];
    } else {
        const num = Math.floor(Math.random() * colorsHex.length)
        console.log(num);
        floor.style.backgroundColor = colorsHex[num];
        nameColor.textContent = colorsHex[num];
    }
    
}

function changeOnHex(e){
    
    hexBtn = true;
    hex.classList.add('active')
    simple.classList.remove('active')
}

function changeOnSimple(e){
    
    hexBtn = false;
    hex.classList.remove('active')
    simple.classList.add('active')
}

function inputChange(e){
    
    let value = e.target.value;
    floor.style.opacity = `0.${value}`;
}

hex.addEventListener('click', changeOnHex, true);
simple.addEventListener('click', changeOnSimple, true);

opacityInput.addEventListener('input', inputChange)

btn.addEventListener('click', changeColor)