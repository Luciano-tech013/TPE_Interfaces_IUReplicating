/** 
 * window.scrollY: Detecta la cantidad de scroll realizada desde el inicio de la pagina 
 * getBoundingClientRect(): Devuelve un conjunto de propiedades dinamcias de un elemento HTML. En este caso
 * se utiliza el top, que devuelve la altura vertical en la que nos encontramos de un determinado elemento. Logicamente,
 * cuando estemos en el inicio de la pagina, el valor de esta propiedad va a ser grande porque estamos a una mayor
 * distancia del elemento al cual se le esta aplicando dicha propiedad
 * 
*/

document.addEventListener("DOMContentLoaded", () => {
    const TITULO_4 = document.querySelector(".titulo_4");
    const TEXTOS = document.querySelectorAll(".parrafo_movible");
    const CONTADOR_IMAGENES_CONTAINER = document.querySelector(".contador_imagenes_container");
    const IMGS_CONTADORAS = [...document.querySelectorAll(".img_contadora")];
    
    let imgAnterior;
    let textoAnterior;
    let lastScrollY = window.scrollY;
    let currentIndex = 0;

    // Inicialización: Opacidad inicial a la primera imagen
    IMGS_CONTADORAS[0].style.opacity = 1;

    let alturaScroll, tamañoPantalla, scrollingDown, textoPropiedades;
    // Escuchar evento scroll
    window.addEventListener("scroll", () => {
        scrollingDown = window.scrollY > lastScrollY; // Detecta dirección del scroll
        lastScrollY = window.scrollY;
        
        alturaScroll = TITULO_4.getBoundingClientRect().top;
        //Si la altura del elemento es 0
        if ((alturaScroll + TITULO_4.getBoundingClientRect().height) < 0) {
            console.log("ESTOY EN LA POSICION CORRECTA");
            CONTADOR_IMAGENES_CONTAINER.style.position = "sticky";

            TEXTOS.forEach((texto, index) => {
                textoPropiedades = texto.getBoundingClientRect();

                // Incrementar el índice si el párrafo entra en la vista
                if (textoPropiedades.top > 0 && textoPropiedades.top < window.innerHeight && textoPropiedades.bottom < window.innerHeight) {
                    currentIndex = index; // Actualizar al índice visible
                    texto.style.opacity = 1;

                    if (textoAnterior && textoAnterior !== texto) {
                        textoAnterior.style.opacity = 0;
                    }
                    textoAnterior = texto;

                    updateImages(currentIndex, IMGS_CONTADORAS);
                }

                // Decrementar el índice si el párrafo sale de la vista por la parte inferior
                if (!scrollingDown && textoPropiedades.bottom <= 0) {
                    texto.style.opacity = 0;
                    currentIndex = Math.max(0, index - 1);
                    updateImages(currentIndex, IMGS_CONTADORAS);
                }
            });
        } else {
            CONTADOR_IMAGENES_CONTAINER.style.position = "absolute";
        }
    });

    function updateImages(index, images) {
        images.forEach(img => {
            const idImg = parseInt(img.getAttribute("id"));
            if (idImg === index) {
                if (imgAnterior && imgAnterior !== img) {
                    imgAnterior.style.opacity = 0;
                } 

                img.style.opacity = 1;
                imgAnterior = img;
            }
        });
    }
});
