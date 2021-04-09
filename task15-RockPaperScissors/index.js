let userCount = 0;
let compCount = 0;

const table = document.querySelector('.table');
const userCount_span = document.querySelector('.user-count');
const compCount_span = document.querySelector('.comp-count');
const rock = document.querySelector('#r');
const paper = document.querySelector('#p');
const scissors = document.querySelector('#s');
const result = document.querySelector('.result');

let randomNum = 0;

function getRandom(){
    randomNum = Math.floor(Math.random() * 3)
}

rock.addEventListener('click', e =>{
    getRandom();
    if(randomNum === 0){
        result.textContent = 'Вы выбрали - Камень. Компьютер выбрал - Камень. Ничья'
    } else if(randomNum === 1){
        result.textContent = 'Вы выбрали - Камень. Компьютер выбрал - Бумагу. Вы проиграли';
        compCount ++;
        compCount_span.textContent = `${compCount}`;
    } else{
        result.textContent = 'Вы выбрали - Камень. Компьютер выбрал - Ножницы. Вы выиграли';
        userCount ++;
        userCount_span.textContent = `${userCount}`

    }
    console.log(randomNum);
})

paper.addEventListener('click', e =>{
    getRandom();
    if(randomNum === 1){
        result.textContent = 'Вы выбрали - Бумагу. Компьютер выбрал - Бумагу. Ничья'
    } else if(randomNum === 2){
        result.textContent = 'Вы выбрали - Бумагу. Компьютер выбрал - Ножницы. Вы проиграли';
        compCount ++;
        compCount_span.textContent = `${compCount}`;
    } else{
        result.textContent = 'Вы выбрали - Бумагу. Компьютер выбрал - Камень. Вы выиграли';
        userCount ++;
        userCount_span.textContent = `${userCount}`

    }
    console.log(randomNum);
})

scissors.addEventListener('click', e =>{
    getRandom();
    if(randomNum === 2){
        result.textContent = 'Вы выбрали - Ножницы. Компьютер выбрал - Ножницы. Ничья'
    } else if(randomNum === 0){
        result.textContent = 'Вы выбрали - Ножницы. Компьютер выбрал - Камень. Вы проиграли';
        compCount ++;
        compCount_span.textContent = `${compCount}`;
    } else{
        result.textContent = 'Вы выбрали - Ножницы. Компьютер выбрал - Бумагу. Вы выиграли';
        userCount ++;
        userCount_span.textContent = `${userCount}`

    }
    console.log(randomNum);
})