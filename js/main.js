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
}

//internval for the slider
//setInterval(slideRight, 5000);

// move to right
function slideRight() {
    reset();
    sliderCards[current + 1].style.display = 'block';
    // las animaciones tiene ir en el contenido, y las imagenes dejar de ser background
    current++;
    animation[current].classList.remove('animateLeft');
    animation[current].classList.add('animateRight'); 
    if(current === animation.length -1){
        current = -1;
    }
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

startSlide();