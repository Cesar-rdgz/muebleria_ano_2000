let sliderCards = document.querySelectorAll('.slide-content'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0
    animation = document.querySelectorAll('#image-ani');
const categories = document.querySelector('.real-time-content');
const blankSearch = document.querySelector('.blank-search');
const noMatch = document.querySelector('.no-match');


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



// render products data

const renderProduct = (data, id) => {
    const html = `
        <div class="grid-container static-data" data-id"${id}">
            <img src="${data.image}" alt="">
            <a id="product" href=""><p>${data.title}</p></a>
        </div>
    `;
    categories.innerHTML += html;
};

function controlView(number) {
    for(let i = number - 1; i >= 4; i--){
        categories.children[i].style.display = 'none';
    }
}

function resetProducts(){
    let oldData = document.querySelectorAll('.static-data');
    oldData.forEach(item => {
       item.style.display = 'none';
    });
}

const renderSearch = (data) => {
    const html = `
        <div class="grid-container static-data">
            <img class="animateRight" src="${data.image}" alt="">
            <a id="product" href=""><p class="animateRight">${data.description}</p></a>
        </div>
    `;

    categories.innerHTML += html;
};