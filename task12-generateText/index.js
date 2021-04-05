const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur perferendis praesentium rerum ducimus nulla laboriosam eum, necessitatibus culpa temporibus maxime doloremque sint aliquid commodi consequuntur. Atque amet enim illum libero est cum molestiae ducimus deleniti quam natus voluptatum illo corrupti veniam asperiores sint similique voluptas molestias, officia, provident vitae hic. Quam earum ea omnis porro voluptatem veritatis nam recusandae a explicabo eum! Inventore assumenda recusandae consequatur, officia voluptatem dicta unde omnis reiciendis labore culpa temporibus obcaecati commodi perferendis voluptates.';

const arrayText = text.split(' ');

const form = document.querySelector('.form');
const btn = document.querySelector('.btn');
const p = document.querySelector('.text');
const input = document.querySelector('.input-form')

form.addEventListener('submit', e => {
    e.preventDefault()
    let num = input.value;
    if(isNaN(num)){
        p.textContent = 'Для генерации введите целое число!';
    } else {
        const generate = (arrayText.slice(0, num)).join(' ');
    p.textContent = generate;
    }
    
    input.value = ''
})