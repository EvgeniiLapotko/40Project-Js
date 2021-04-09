
const slides = document.querySelectorAll('.slide');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');


slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
});

let counter = 0;

btnNext.addEventListener('click', e => {
    counter ++;
    corusel()
})

btnPrev.addEventListener('click', e => {
    counter --;
    corusel()
})

function corusel(){

    if (counter >= slides.length - 1){
        btnNext.classList.remove('active')
    } else if(counter <= 0 ){
        btnPrev.classList.remove('active')
    }
    if (counter > 0){
        btnPrev.classList.add('active')
    }
    if(counter < slides.length - 1){
        btnNext.classList.add('active')
    }

    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}


