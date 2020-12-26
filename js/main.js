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



// lineas functions

const btnDefault = document.querySelector('.lista-categorias .articulo[category="linea-blanca"]');
let btnsFilter = document.querySelectorAll('.articulo');
let products = document.querySelectorAll('.grid-container');


btnDefault.classList.add('active');
btnsFilter.forEach(btn => {
btn.addEventListener('click', e => {
    let catProduct = btn.getAttribute('category');

    removeClass();
    btn.classList.add('active');

    products.forEach(product => {
    let catItem = product.getAttribute('category');
    if(catProduct === catItem){
        product.classList.add('active');
    }else {
        product.classList.remove('active');
        product.classList.add('unactive');
    }
    });
});
});

function removeClass() {
btnsFilter.forEach(btn => {
    btn.classList.remove('active');
});
}

function init(){
const productInit = btnDefault.getAttribute('category');
products.forEach(product => {
    const startItem = product.getAttribute('category');
    if(startItem === productInit){
    product.classList.add('active');
    }else{
    product.classList.remove('active');
    product.classList.add('unactive');
    }
});
}

init();

// end lineas functions


/* ------------------------------------- */



// render products data

const renderProduct = (data, id) => {
    const html = `
        <div class="grid-container static-data" data-id"${id}">
            <img src="${data.image}" alt="">
            <ul class="description-links">
                <li><a href="">${data.title}</a></li>
                <li class="accordion" id="click"><a href="#click"><i class="fas fa-info-circle"></i> Info</a>
                  <p class="info-display">${data.info}</p>
                </li>
                <li><a id="last-link" href="https://wa.me/524371026787?text=Hola%20me%20puedes%20dar%20más%20información%20sobre%20esto%20${data.title}"><i class="fab fa-whatsapp"></i></a></li>
            </ul>
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
        <div class="grid-container static-data" data-id"${id}>
            <img class="animateRight" src="${data.image}" alt="">
            <ul class="description-links">
                <li><a href="">${data.title}</a></li>
                <li class="accordion" id="click"><a href="#click"><i class="fas fa-info-circle"></i> Info</a>
                  <p class="info-display">${data.info}</p>
                </li>
                <li><a href="https://wa.me/524371026787?text=Hola%20me%20puedes%20dar%20más%20información%20sobre%20esto%20${data.title}"><i class="fab fa-whatsapp"></i></a></li>
            </ul>
        </div>
    `;

    categories.innerHTML += html;
};

// accordion functions display info products

function accordion() {
const accordions = document.querySelectorAll('.products .grid-categories .grid-container .description-links');

accordions.forEach(accordion => {
    accordion.addEventListener('click', e => {
        const infoText = e.target.nextElementSibling.className;
        const divInfo = e.target.nextElementSibling;
        if(infoText === 'info-display' || infoText === 'info-display the_dropdown'){
            e.preventDefault();
            divInfo.classList.toggle('the_dropdown');
    }
    });
});

/*accor.addEventListener('click', e => {
    
});*/
}





setTimeout(accordion, 8000);



function redirectSearch() {
    const element = document.querySelector('.grid-categories');
    element.addEventListener('click', e => {
        const querySearch = e.target.innerText;
        const queryToLower = querySearch.toLowerCase();
        localStorage.setItem("textvalue", queryToLower);
        return false;
    });
}

function redirectInput(){
    const form = document.getElementById('search-field');
    form.addEventListener('keyup', e => {
        const element = form.product.value;
        const queryToLower = element.toLowerCase();
        localStorage.setItem("textvalue", queryToLower);
        return false;
    });
}

redirectSearch();

redirectInput();