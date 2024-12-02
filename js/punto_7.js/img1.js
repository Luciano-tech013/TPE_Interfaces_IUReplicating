const CARD_IMG_1 = document.querySelector(".cards_img_1");

window.addEventListener('scroll', () => {
    let alturaCardImg = CARD_IMG_1.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    
    if((alturaCardImg - 820)< tamañoPantalla) {
        CARD_IMG_1.style.top = '1250px'
        CARD_IMG_1.style.transform = 'translateY(0px)';
    }
})