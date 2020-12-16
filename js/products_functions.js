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
        wordsTwo: 'centros de entretenimiento',
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
        image: 'hisense-conge.jpg',
        title: 'Hisense Congelador',
        info: 'CAPACIDAD: 9 Pies</br>LLAVE DE SEGURIDAD: SI</br>FUNCIONES: CONGELA|CONSERVA CONGELADO</br>',
        words: 'congeladores',
        wordsTwo: 'congelador',
        wordsThree: 'hisense'
    },
    {
        image: 'daewoo.jpg',
        title: 'Refrigerador Daewoo',
        info: 'CAPACIDAD: 11 PIES</br>CONTROL DE TEMPERATURA:	MECÁNICO</br>LLAVE DE SEGURIDAD: SI</br>JALADERAS: VERTICAL</br>',
        words: 'refris',
        wordsTwo: 'refrigerador',
        wordsThree: 'refrigeradores'
    },
    {
        image: 'ge.jpg',
        title: 'Refrigerador Ge',
        info: 'CAPACIDAD: 23 PIES</br>CONTROL DE TEMPERATURA:	Touch</br>LLAVE DE SEGURIDAD: SI</br>JALADERAS: POCKET</br>DESPACHADOR DE AGUA: NO.',
        words: 'refris',
        wordsTwo: 'refrigerador',
        wordsThree: 'refrigeradores'
    },
    {
        image: 'mabe.jpg',
        title: 'Refrigerador Mabe',
        info: 'CAPACIDAD: 19 PIES</br>CONTROL DE TEMPERATURA:	c°</br>DESPACHADOR DE HIELO: NO</br>JALADERAS: POCKET</br>DESPACHADOR DE AGUA: SI.',
        words: 'refris',
        wordsTwo: 'refrigerador',
        wordsThree: 'refrigeradores'
    },
    {
        image: 'horno-osterizer.jpg',
        title: 'Horno de tostador Osterizer',
        info: 'Cronómetro de 60 minutos con apagado</br>CTecnología de calor por convección para una cocción más rápida y uniforme</br>Funciones para hornear, calentar, asar y tostar.',
        words: 'hornos tostador',
        wordsTwo: 'hornos',
        wordsThree: 'horno'
    },
    {
        image: 'horno-samsung.jpg',
        title: 'Horno de micro Samsung',
        info: 'Panel de control: digital</br>Capacidad 1.1PIES cubicos</br>Potencia: 1000WATTS.',
        words: 'hornos de microondas',
        wordsTwo: 'hornos',
        wordsThree: 'horno de micro'
    },
    {
        image: 'horno-daewoo.jpg',
        title: 'Horno de micro Daewoo',
        info: 'Panel de control: Electronico</br>Capacidad 1.6PIES cubicos</br>Potencia: 1000WATTS.',
        words: 'hornos de microondas',
        wordsTwo: 'hornos',
        wordsThree: 'horno de micro'
    },
    {
        image: 'recamara-greca-king.jpg',
        title: 'Recamara Greca King',
        info: 'Medidas(alto x ancho x profundo)</br>Cabecera: 150cm 200cm 4cm</br>Buro: 64cm 55cm 38cm</br>Tocador: 101cm 135cm 36cm</br>Espejo: 150cm 65cm 3cm',
        words: 'recamaras',
        wordsTwo: 'recamara greca king',
        wordsThree: 'recamara'
    },
    {
        image: 'rec-celaya-king.jpg',
        title: 'Recamara Celaya King',
        info: 'Medidas(alto x ancho x profundo)</br>Cabecera: 150cm 200cm 8cm</br>Buro: 64cm 55cm 38cm</br>Tocador: 87cm 144cm 38cm</br>Espejo: 150cm 65cm 6cm',
        words: 'recamaras',
        wordsTwo: 'recamara greca king',
        wordsThree: 'recamara'
    },
    {
        image: 'rec-fresnillo-king.jpg',
        title: 'Recamara Fresnillo King',
        info: 'Medidas(alto x ancho x profundo)</br>Cabecera: 150cm 200cm 8cm</br>Buro: 64cm 55cm 38cm</br>Tocador: 87cm 144cm 38cm</br>Espejo: 150cm 65cm 6cm',
        words: 'recamaras',
        wordsTwo: 'recamara greca king',
        wordsThree: 'recamara'
    },
    {
        image: 'rec-palermo-king.jpg',
        title: 'Recamara Palermo King',
        info: 'Medidas(alto x ancho x profundo)</br>Cabecera: 150cm 200cm 8cm</br>Buro: 80cm 55cm 38cm</br>Cajonera: 180cm 60cm 36cm</br>Zapatera: 180cm 60cm 36cm',
        words: 'recamaras',
        wordsTwo: 'recamara greca king',
        wordsThree: 'recamara'
    },
    {
        image: 'rec-pisa-cerezo.jpg',
        title: 'Recamara Pisa Cerezo',
        info: 'No disponible',
        words: 'recamaras',
        wordsTwo: 'recamara greca king',
        wordsThree: 'recamara'
    },
    {
        image: 'rec-singapur.jpg',
        title: 'Recamara Singapur',
        info: 'No disponible',
        words: 'recamaras',
        wordsTwo: 'recamara greca king',
        wordsThree: 'recamara'
    },
    {
        image: 'escritorios.jpg',
        title: 'Escritorio Canyon',
        info: 'Acabado: Mate</br>Cubierta: Melamina</br>Medidas(alto x ancho x profundo)</br>76x120x55cm',
        words: 'escritorios',
        wordsTwo: 'oficina',
        wordsThree: 'muebles de oficina'
    },
    {
        image: 'estufa-mabe.jpg',
        title: 'Estufa Mabe',
        info: 'Tamaño: 30"</br>Quemadores: 6 Estandar</br>Encendido: Manual.',
        words: 'estufas',
        wordsTwo: 'cocina',
        wordsThree: 'estufa'
    },
    {
        image: 'iem.jpg',
        title: 'Estufa Iem',
        info: 'Tamaño: 20"</br>Quemadores: 4 quemadores</br>Encendido: electronico.',
        words: 'estufas',
        wordsTwo: 'cocina',
        wordsThree: 'estufa'
    },
    {
        image: 'whirlpool-estufa.jpg',
        title: 'Estufa Whirlpool',
        info: 'Tamaño: 30"</br>Capelo de cristal templado</br>Cubierta de acero inoxidable sellada</br>Ideal para gas LP.',
        words: 'estufas',
        wordsTwo: 'cocina',
        wordsThree: 'estufa'
    },
    {
        image: 'hornos-tostadores.jpg',
        title: 'Horno tostador kuk',
        info: 'Funciones: Calentar"</br>Bandeja recolectora: si</br>Apagado automatico: si</br>Termostato: no.',
        words: 'hornos tostador',
        wordsTwo: 'hornos',
        wordsThree: 'horno'
    },
    {
        image: 'horno-tostador-kuk.jpg',
        title: 'Horno tostador kuk',
        info: 'Funciones: Asar"</br>Bandeja recolectora: No</br>Apagado automatico: No</br>Termostato: Ajustable.',
        words: 'hornos tostador',
        wordsTwo: 'hornos',
        wordsThree: 'horno'
    },
    {
        image: 'esquinero.jpg',
        title: 'Esquinero Arkansas',
        info: 'No disponible',
        words: 'salas',
        wordsTwo: 'sillones',
        wordsThree: 'sillon'
    },
    {
        image: 'sofa-cama.jpg',
        title: 'Sofá cama Atenas',
        info: 'No disponible',
        words: 'salas',
        wordsTwo: 'sillones',
        wordsThree: 'sillon'
    },
    {
        image: 'sala-bora.jpg',
        title: 'Sala esquinera Bora',
        info: 'No disponible',
        words: 'salas',
        wordsTwo: 'sillones',
        wordsThree: 'sillon'
    },
    {
        image: 'salas.jpg',
        title: 'Sala 3-2 ganges',
        info: 'Cojines: No</br>Estilo: contemporaneo</br> Incluye: 2 piezas.',
        words: 'salas',
        wordsTwo: 'sillones',
        wordsThree: 'sillon'
    },
    {
        image: 'sillas-oficina.jpg',
        title: 'Silla Mesh Malla',
        info: 'Material del tapizado: tela microespacial</br>Modelo: econo-malla',
        words: 'sillas de oficina',
        wordsTwo: 'oficina',
        wordsThree: 'sillas'
    },
    {
        image: 'colchones.jpg',
        title: 'Colchon Restonic',
        info: 'Sistema de descanso: Firmeza media</br>Tamaño: Individual</br>Tecnología: Eurotop',
        words: 'colchones',
        wordsTwo: 'colchones para base',
        wordsThree: 'camas'
    },
    {
        image: 'lavadora-easy.jpg',
        title: 'Lavadora Easy',
        info: 'Tipo de carga: Superior</br>Sistema de lavado: Agitador</br>Capacidad lavado: 15Kg',
        words: 'lavadoras',
        wordsTwo: 'lavadora',
        wordsThree: 'lavanderia'
    },
    {
        image: 'lavadora-mabe.jpg',
        title: 'Lavadora Mabe',
        info: 'Tipo de carga: Superior</br>Sistema de lavado: Normal</br>Capacidad lavado: 13Kg</br>Control de agua: automatico.',
        words: 'lavadoras',
        wordsTwo: 'lavadora',
        wordsThree: 'lavanderia'
    },
    {
        image: 'lavadora-acros.jpg',
        title: 'Lavadora Acros',
        info: 'Centrifugado de 5 kg y filtro atrapa pelusa</br>Sistema de lavado por impulsor Max Spin Dry</br>4 Perillas, 5 ciclos de lavado y 2 fuerzas de lavado</br>',
        words: 'lavadoras',
        wordsTwo: 'lavadora',
        wordsThree: 'lavanderia'
    },
    {
        image: 'lavadoras.jpg',
        title: 'Lavadora Acros',
        info: 'Tipo de carga: Superior</br>Sistema de lavado: Agitador</br>Niveles de agua: automatico</br>Control de agua: automatica.',
        words: 'lavadoras',
        wordsTwo: 'lavadora',
        wordsThree: 'lavanderia'
    },
    {
        image: 'ropero-entrpaños.jpg',
        title: 'Ropero Entrepaños',
        info: 'Medidas(alto x ancho x profundo)</br>132x122x46cm',
        words: 'roperos',
        wordsTwo: 'ropero',
        wordsThree: 'muebles'
    },
    {
        image: 'ropero-normal.jpg',
        title: 'Comoda puertas Rio',
        info: 'Medidas(alto x ancho x profundo)</br>153x80x37cm',
        words: 'roperos',
        wordsTwo: 'ropero',
        wordsThree: 'muebles'
    },
    {
        image: 'ropero-zacatecas.jpg',
        title: 'Comoda puertas Rio',
        info: 'Medidas(alto x ancho x profundo)</br>180x152x51cm',
        words: 'roperos',
        wordsTwo: 'ropero',
        wordsThree: 'muebles'
    },
    {
        image: 'ropero-zacatecas-jumbo.jpg',
        title: 'Ropero Zacatecas Jumbo',
        info: 'Medidas(alto x ancho x profundo)</br>230x202x51cm',
        words: 'roperos',
        wordsTwo: 'ropero',
        wordsThree: 'muebles'
    },
    {
        image: 'ropero-zacatecas-jumbo.jpg',
        title: 'Ropero Zacatecas Jumbo',
        info: 'Medidas(alto x ancho x profundo)</br>230x202x51cm',
        words: 'roperos',
        wordsTwo: 'ropero',
        wordsThree: 'muebles'
    },
    {
        image: 'plancha-decker.jpg',
        title: 'Plancha Decker',
        info: 'Potencia: 1200Watts</br>apagado automatico: no</br>Atigoteo: si</br>Vapor vertical: si.',
        words: 'planchas',
        wordsTwo: 'electrodomesticos',
        wordsThree: 'plancha decker'
    },
    {
        image: 'planchas.jpg',
        title: 'Plancha Osterizer',
        info: 'Potencia: 1200Watts</br>apagado automatico: no</br>Atigoteo: no</br>Capacidad de tanque: 180ML.',
        words: 'planchas',
        wordsTwo: 'electrodomesticos',
        wordsThree: 'plancha decker'
    },
    {
        image: 'batidoras.jpg',
        title: 'Batidora Kitchenaid',
        info: 'Potencia: 325Watts</br>ACCESORIOS</br>BATIDOR GLOBO|BATIDOR PLANO|GANCHO PARA AMASAR|PROTECTOR DE VERTIDO|TAZON ACERO INOXIDABLE',
        words: 'accesorios',
        wordsTwo: 'electrodomesticos',
        wordsThree: 'batidoras'
    },
    {
        image: 'licuadoras.jpg',
        title: 'Licuadora Oster Soho',
        info: 'Velocidades: 2</br>Tipo: clasica</br>Capacidad: 1.50LTS</br>Cuchillas: 4',
        words: 'accesorios',
        wordsTwo: 'electrodomesticos',
        wordsThree: 'licuadoras'
    },
    {
        image: 'extractores.jpg',
        title: 'Extractores Osterizer',
        info: 'Potencia: 400W</br>Velocidades: 1</br>Antigoteo: No',
        words: 'accesorios',
        wordsTwo: 'electrodomesticos',
        wordsThree: 'extractores'
    }
];

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
    const searchToLower = searchWord.toLowerCase();
    setTimeout(accordion, 3000);
    products.filter((product) => {
        const letter = product.words;
        const letterTwo = product.wordsTwo;
        const letterThree = product.wordsThree;
        if(letter === searchToLower || letterTwo === searchToLower || letterThree === searchToLower){
            
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




window.onload = function(){
    if(localStorage.getItem("textvalue").length !== undefined){
        cleanDiv();
        let searchWord = localStorage.getItem("textvalue");
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
    }
}


function clearLocal(){
    window.localStorage.removeItem("textvalue");
}

setTimeout(clearLocal, 1500);