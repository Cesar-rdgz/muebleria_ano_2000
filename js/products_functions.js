const products = [
    {
        image: 'alacena-chocolate.jpg',
        title: 'Alacena chocolate',
        info: 'Acabado: Mate.</br>Material: MDF</br>Medidas(alto x largo x profundo)</br>190 x 70 x 38',
        words: 'alacenas',
        wordsTwo: 'alacena'
    },
    {
        image: 'alacenas.jpg',
        title: 'Alacena Genova',
        info: 'Color: chocolate</br>Material: MDF</br>Medidas(alto x largo x ancho).(115 x 122 x 40)',
        words: 'alacena',
        wordsTwo: 'alacenas',
        wordsThree: 'genova'
    },
    {
        image: 'batidoras.jpg',
        title: 'Batidora Kitchenaid',
        info: 'Potencia: 325 WATTS</br>Accesorios: BATIDOR GLOBO|BATIDOR PLANO|GANCHO PARA AMASAR|PROTECTOR DE VERTIDO|TAZONACERO INOXIDABLE.',
        words: 'batidora',
        wordsTwo: 'batidoras',
        wordsThree: 'kitchenaid'
    },
    {
        image: 'cama.jpg',
        title: 'Ohma King Size',
        info: 'Estilo: contemporaneo</br>Tamaño: King Size</br>Material: Madera</br>',
        words: 'bases',
        wordsTwo: 'base',
        wordsThree: 'bases de cama'
    },
    {
        image: 'centros-entretenimiento.jpg',
        title: 'Mueble para tv paris',
        info: 'Acabado: MDF</br>Estilo: contemporaneo</br>MEDIDAS (ALTO X LARGO X PROFUNDO)</br>80 X 120 X 35',
        words: 'mueble para tv',
        wordsTwo: 'centro de entretenimiento',
        wordsThree: 'muebles'
    },
    {
        image: 'cocina-integral.jpg',
        title: 'Cocina Integral',
        info: 'Medidas (alto x ancho x profundo</br>Tarja: 95cm x 100cm x 64cm</br>Cajonera: 96cm 55cm 64cm</br>Sup cajonera: 60cm 55cm 30cm</br>Sup Tarja: 60cm 100cm 30cm</br>Estufa: 40cm 80cm 30cm</br>',
        words: 'cocina integral',
        wordsTwo: 'cocinas',
        wordsThree: 'cocina'
    },
    {
        image: 'colchones.jpg',
        title: 'Colchon Restonic',
        info: 'SISTEMA DE DESCANSO: FIRMEZA MEDIA</br>TECNOLOGÍA: EUROTOP</br>TAMAÑO: KING SIZE.',
        words: 'colchones',
        wordsTwo: 'colchon',
        wordsThree: 'restonic'
    },
    {
        image: 'comedores.jpg',
        title: 'Comedor Ury',
        info: 'ACABADO: CHAPA DE ENCINO</br>SILLAS: INCLUYE 6</br>MEDIDAS (ALTO X LARGO X PROFUNDO)</br>77X190X77',
        words: 'comedor',
        wordsTwo: 'comedores',
        wordsThree: 'mesas'
    },
    {
        image: 'comedor-holanda.jpg',
        title: 'Comedor Holanda',
        info: 'No disponible',
        words: 'comedor',
        wordsTwo: 'comedores',
        wordsThree: 'mesas'
    },
    {
        image: 'comedor-italia.jpg',
        title: 'Comedor Italia',
        info: 'No disponible',
        words: 'comedor',
        wordsTwo: 'comedores',
        wordsThree: 'mesas'
    },
    {
        image: 'comoda-morgan.jpg',
        title: 'Comoda Morgan',
        info: 'ACABADO: MELAMINA</br>NUMERO CAJONES: 3</br>MEDIDAS (ALTO X LARGO X PROFUNDO)</br>96 X 72 X 39',
        words: 'comoda',
        wordsTwo: 'comodas',
        wordsThree: 'morgan'
    },
    {
        image: 'comoda-para-tv.jpg',
        title: 'mueble para tv',
        info: 'No disponible',
        words: 'mueble para tv',
        wordsTwo: 'mueble',
        wordsThree: 'tv'
    },
    {
        image: 'congeladores.jpg',
        title: 'Hisense Congelador',
        info: 'CAPACIDAD: 9 Pies</br>LLAVE DE SEGURIDAD: SI</br>FUNCIONES: CONGELA|CONSERVA CONGELADO</br>',
        words: 'congeladores',
        wordsTwo: 'congelador',
        wordsThree: 'hisense'
    }

];

setTimeout(simulateClick, 1000);

function simulateClick(){
    searchButton.click();
}

const searchForm = document.querySelector('form');
const div = document.querySelector('.grid-categories.real-time-content.content-product')
const html = `
    <div class='no-result'>
        <p class='animateRight'> no encontramos nada, trata con otra cosa </p>
    </div>
`;


searchForm.addEventListener('submit', e => {
    e.preventDefault();
    cleanDiv();
    const searchWord = searchForm.search_value.value;
    setTimeout(accordion, 3000);
    products.filter((product) => {
        const letter = product.words;
        const letterTwo = product.wordsTwo;
        const letterThree = product.wordsThree;
        if(letter === searchWord || letterTwo === searchWord || letterThree === searchWord){
            
            const productTitle = product.title;
            const productInfo = product.info;
            const productImage = product.image;
            displaySearch(productTitle, productInfo, productImage);
        }else {
            
        }
    });
});

function displaySearch(title, info, image) {
    console.log(title, info);
    let newHtml = `
        <div class="grid-container static-data">
            <img class="animateRight" src="images/products/${image}" alt="">
            <ul class="description-links animateRight">
            <li><a class="product-title" href="">${title}</a></li>
            <li class="accordion" id="click"><a href="#click"><i class="fas fa-info-circle"></i> Info</a>
                <p class="info-display">${info}</p>
            </li>
            <li><a href=""><i class="fab fa-whatsapp"></i></a></li>
            </ul>
        </div>
        `;
    div.innerHTML += newHtml;
}

function cleanDiv(){
    div.innerHTML = '';
}


function defaultMessage() {
    div.innerHTML = html;
}



/* ---------- dropdown -----------*/


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
}
