
const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

let counter = 0

btns.forEach(elem => elem.addEventListener('click', (e) => {
    const style = e.currentTarget.classList;

    if(style.contains('decrem')){
        counter--;
    } else if (style.contains('increm')){
        counter++;
    } else {
        counter = 0
    }
    value.textContent = counter;
    if(counter>0){
        value.style.color = 'green'
    } else if (counter<0){
        value.style.color = 'red'
    } else {
        value.style.color = "#000"
    }
}))

// const decrem = document.querySelector('.decrem');
// const increm = document.querySelector('.increm');
// const reset = document.querySelector('.reset');


// let counter = 0

// function decremCounter(){
//     counter--;
//     value.textContent = counter;
//     if(counter<0){
//         value.style.color = 'red'
//     }
// }

// function incremCounter(){
//     counter++;
//     value.textContent = counter;
//     if(counter>0){
//         value.style.color = 'green'
//     }
// }
// function resetCounter(){
//     counter = 0;
//     value.textContent = counter;
//     value.style.color = '#000'
// }




// decrem.addEventListener('click', decremCounter);
// increm.addEventListener('click', incremCounter);
// reset.addEventListener('click', resetCounter);