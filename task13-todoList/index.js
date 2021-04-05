

const form = document.querySelector('.form');
const input = form.querySelector('.input-name');
const list = document.querySelector('.list');
const clear = document.querySelector('.btn-clear');
const popup = document.querySelector('.popup');
const popupDel = document.querySelector('.popup-del');


let currentData = 'currentData';
let listItems = JSON.parse(localStorage.getItem(currentData));

if(listItems){
    listItems.forEach(item => {
        creatElem(item)
    })
}else{
    listItems = []
}

function setLocal(value){
    
    localStorage.setItem(currentData, JSON.stringify(value) )
}

function deleteLocal(value) {
    listItems = listItems.filter( item => item !== value);
    setLocal(listItems)

}

clear.addEventListener('click', e => {
    const listLi = document.querySelectorAll('.list-li')
    listLi.forEach( elem => {
        list.removeChild(elem)
    })
    popupDel.classList.add('active');
        setTimeout(() => {
            popupDel.classList.remove('active')
        }, 2000);
})


function creatElem(value){
    let li = document.createElement('li');
    li.classList.add('list-li')
    li.textContent = value;
    btn = document.createElement('button');
    btn.classList.add('btn-delete');
    btn.textContent = '+'
    li.appendChild(btn)
    list.appendChild(li)
    btn.addEventListener('click', e => {
        let parent = e.target.parentElement;
        list.removeChild(parent)
        deleteLocal(value);
        popupDel.classList.add('active');
        setTimeout(() => {
            popupDel.classList.remove('active')
        }, 2000);
    })
    
}

form.addEventListener('submit', e => {
    e.preventDefault()
    let value = input.value;
    listItems.push(value) ;
    setLocal(listItems)  
    input.value = '';
    creatElem(value);
    popup.classList.add('active');
    setTimeout(() => {
        popup.classList.remove('active')
    }, 2000);
})