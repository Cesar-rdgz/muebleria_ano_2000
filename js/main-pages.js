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


accordion();