const CARD_IMG_2 = document.querySelector(".cards_img_2");

window.addEventListener('scroll', () => {
    let alturaCardImg = CARD_IMG_2.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    
    if((alturaCardImg - 820)< tamañoPantalla) {
        setTimeout(() => {
            CARD_IMG_2.style.top = '1250px'
            CARD_IMG_2.style.transform = 'translateY(0px)';
        }, 300);
    }
});