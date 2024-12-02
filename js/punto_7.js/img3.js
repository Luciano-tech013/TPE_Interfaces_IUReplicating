const CARD_IMG_3 = document.querySelector(".cards_img_3");

window.addEventListener('scroll', () => {
    let alturaCardImg = CARD_IMG_3.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    
    if((alturaCardImg - 820)< tamañoPantalla) {
        setTimeout(() => {
            CARD_IMG_3.style.top = '1250px'
            CARD_IMG_3.style.transform = 'translateY(0px)';
        }, 600);
    }
});