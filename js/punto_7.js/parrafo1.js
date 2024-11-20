const CARD_PARRAFO_1 = document.querySelector(".cards_parrafo_1");

window.addEventListener('scroll', () => {
    let alturaCardParrafo = CARD_PARRAFO_1.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;

    if((alturaCardParrafo - 1172) < tamañoPantalla) {
        CARD_PARRAFO_1.style.top = '1576px';
        CARD_PARRAFO_1.style.transform = 'translateY(0px)';
    }
})