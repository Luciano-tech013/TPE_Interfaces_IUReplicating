const SECTION = document.querySelector(".section_4_parrafos");
const TEXTOS_CONTAINER = document.querySelector(".galeria_parrafos_movibles");
const TEXTOS = document.querySelectorAll(".parrafo_movible");
const CONTADOR_IMAGENES_CONTAINER = document.querySelector(".contador_imagenes_container");
const TITULO_CONTAINER = document.querySelector(".titulo_4_container");
const IMG_CONTADORA = document.querySelector("#imagen_contadora");
const POS_Y_GALERIA = TEXTOS_CONTAINER.getBoundingClientRect()["y"];

const imgs = ["./assets/imgs/imagen_contadora_0", 
            "./assets/imgs/imagen_contadora_1",
            "./assets/imgs/imagen_contadora_2",
            "./assets/imgs/imagen_contadora_3",
            "./assets/imgs/imagen_contadora_4",
            "./assets/imgs/imagen_contadora_5",
            "./assets/imgs/imagen_contadora_6",
            "./assets/imgs/imagen_contadora_7",
            "./assets/imgs/imagen_contadora_8",
            "./assets/imgs/imagen_contadora_9",
            "./assets/imgs/imagen_contadora_10",
];

let currentIndex = 0;
let imgActual, widthParrafo, heightParrafo, posYGaleria;
window.addEventListener('scroll', () => {
    //obtener posicion del section de los parrafos
    let alturaScroll = SECTION.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight;
    
    if((alturaScroll + 320) < tamañoPantalla) {
        CONTADOR_IMAGENES_CONTAINER.style.position = 'sticky'
        TEXTOS.forEach(texto => {
            widthParrafo = texto.getBoundingClientRect()["width"];
            heightParrafo = texto.getBoundingClientRect()["height"];
            console.log(POS_Y_GALERIA);
            if(POS_Y_GALERIA >= (POS_Y_GALERIA + widthParrafo) && POS_Y_GALERIA <= (POS_Y_GALERIA + heightParrafo)) {
                console.log("Entre wachin!!");
            }   
            if(parseInt(texto.getAttribute("id")) === currentIndex) {
                imgActual = imgs[currentIndex];
                IMG_CONTADORA.getAttribute("src").valueOf = imgActual;
            }
        });
    } else {
        CONTADOR_IMAGENES_CONTAINER.style.position = 'absolute';
    }
})