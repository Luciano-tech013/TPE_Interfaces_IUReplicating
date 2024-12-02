const CARD_PARRAFO_3 = document.querySelector(".cards_parrafo_3");

window.addEventListener('scroll', () => {
    let alturaCardParrafo = CARD_PARRAFO_3.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;

    if((alturaCardParrafo - 1172) < tamañoPantalla) {
        setTimeout(() => {
            CARD_PARRAFO_3.style.top = '1576px';
            CARD_PARRAFO_3.style.transform = 'translateY(0px)';
        }, 600);
    }
});