const CARD_PARRAFO_2 = document.querySelector(".cards_parrafo_2");

window.addEventListener('scroll', () => {
    let alturaCardParrafo = CARD_PARRAFO_2.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;

    if((alturaCardParrafo - 1172) < tamañoPantalla) {
        setTimeout(() => {
            CARD_PARRAFO_2.style.top = '1576px';
            CARD_PARRAFO_2.style.transform = 'translateY(0px)';
        }, 300);
    }
});