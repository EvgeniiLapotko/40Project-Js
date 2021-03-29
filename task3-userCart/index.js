const users = [
    {
        id: 1,
        name : 'katy',
        job : 'disigner',
        img : 'images/user1',
        text : "it is working"
    },
    {
        id: 2,
        name : 'stiven',
        job : 'progger',
        img : 'images/user2',
        text : "it is working"
    },
    {
        id: 3,
        name : 'bill',
        job : 'student',
        img : 'images/user3',
        text : "it is working"
    }
];

const nameUser = document.querySelector('.name-user');
const work = document.querySelector('.work');
const userAvatar = document.querySelector('.user-avatar');
const text = document.querySelector('.text');
const btns = document.querySelectorAll('.btn');

btns.forEach(elem => {
    elem.addEventListener('click', e => {
        const style = e.currentTarget.classList;
        if(style.contains('prev')){
            console.log('works');
        }else if (style.contains('next')){
            console.log('it is next');
        } else {
            console.log('random');
        }
    })
})