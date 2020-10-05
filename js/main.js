let sliderCards = document.querySelectorAll('.slide-content'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0
    animation = document.querySelectorAll('#image-ani');


// hidde everything
function reset() {
    for( let i = 0; i < sliderCards.length; i++) {
        sliderCards[i].style.display = 'none';
    }
}

// initializer
function startSlide() {
    reset();
    sliderCards[0].style.display = 'block';
}

// move to left
function slideLeft () {
    reset();
    sliderCards[current - 1].style.display = 'block';
    current--;
    animation[current].classList.remove('animateRight');
    animation[current].classList.add('animateLeft');
    console.log(current);
}

//internval for the slider
setInterval(emuClick, 8000);

// move to right
function slideRight() {
    reset();
    sliderCards[current + 1].style.display = 'block';
    current++;
    animation[current].classList.remove('animateLeft');
    animation[current].classList.add('animateRight'); 
}

//click left arrow
arrowLeft.addEventListener('click', function (){
    if(current === 0){
        current = sliderCards.length;
    }
    slideLeft();
});

//click right arrow
arrowRight.addEventListener('click', function (){
    if(current === sliderCards.length -1){
        current = -1;
    }
    slideRight();
});

//emulate click on right arrow
function emuClick(){
    arrowRight.click();    
}

startSlide();