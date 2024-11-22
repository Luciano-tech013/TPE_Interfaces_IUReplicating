document.addEventListener("DOMContentLoaded", () => {
    const SECTION = document.querySelector(".section_4_parrafos");
    const TEXTOS = document.querySelectorAll(".parrafo_movible");
    const CONTADOR_IMAGENES_CONTAINER = document.querySelector(".contador_imagenes_container");
    const IMGS_CONTADORAS = document.querySelectorAll(".img-hide");

    const procesados = [];
    let imgAnterior;
    let textoAnterior;
    let lastScrollY = window.scrollY; // Para rastrear la posición previa del scroll
    let currentIndex = 0;

    // Inicialización: Opacidad inicial
    TEXTOS.forEach(texto => {
        if (parseInt(texto.getAttribute("id")) == 0) {
            texto.style.opacity = 1;
            textoAnterior = texto;
        } 
    });

    // Inicialización: Imagen inicial
    IMGS_CONTADORAS.forEach(img => {
        if (parseInt(img.getAttribute("id")) == 0) {
            imgAnterior = img;
            img.classList.add("img-show");
        } 
    });

    // Escuchar evento scroll
    window.addEventListener("scroll", () => {
        const alturaScroll = SECTION.getBoundingClientRect().top;
        const tamañoPantalla = window.innerHeight;
        const scrollingDown = window.scrollY > lastScrollY; // Detecta dirección del scroll
        lastScrollY = window.scrollY;

        if ((alturaScroll + 320) < tamañoPantalla) {
            CONTADOR_IMAGENES_CONTAINER.style.position = "sticky";

            TEXTOS.forEach((texto, index) => {
                const parrafo = texto.getBoundingClientRect();

                // Incrementar el índice si el párrafo entra en la vista
                if (parrafo.top > 0 && parrafo.bottom < window.innerHeight - 280) {
                    if (!procesados.includes(texto)) {
                        procesados.push(texto);
                    }

                    currentIndex = index; // Actualizar al índice visible
                    texto.style.opacity = 1;

                    if (textoAnterior && textoAnterior !== texto) {
                        textoAnterior.style.opacity = 0;
                    }
                    textoAnterior = texto;

                    updateImages(currentIndex, IMGS_CONTADORAS);
                }

                // Decrementar el índice si el párrafo sale de la vista por la parte inferior
                if (!scrollingDown && parrafo.bottom <= 0) {
                    if (procesados.includes(texto)) {
                        procesados.splice(procesados.indexOf(texto), 1);
                    }

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
                    imgAnterior.classList.remove("img-show");
                    imgAnterior.classList.add("img-hide");
                } 

                img.classList.remove("img-hide");
                img.classList.add("img-show");
                imgAnterior = img;
            }
        });
    }
});
