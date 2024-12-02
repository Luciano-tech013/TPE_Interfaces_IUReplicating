document.body.style.overflow = 'hidden';

let counter = 0;
document.addEventListener("DOMContentLoaded", async () => {
    const SECTION_1 = document.querySelector(".section_1");
    const HEADER = document.querySelector("header");
    const COLUMNS = document.querySelector(".columns");
    const COLUMN_1 = document.querySelector(".column_1");
    const COLUMN_2 = document.querySelector(".column_2");
    const COLUMN_3 = document.querySelector(".column_3");
    const COLUMN_4 = document.querySelector(".column_4");
    const COLUMN_5 = document.querySelector(".column_5");
    const COLUMN_6 = document.querySelector(".column_6");
    const CONTADOR = document.querySelector("#contador");
    const LOADER_BAR = document.querySelector(".loader")

    const load = setInterval(() => {
        if(counter < 100) {
            counter++;
            CONTADOR.innerHTML = `${counter}%`;
        } else {
            clearInterval(load);
            SECTION_1.style.filter = 'none';
            HEADER.style.filter = 'none';
            COLUMNS.style.filter = 'none';

            ejecutarAnimacion(COLUMN_1, COLUMN_2, COLUMN_3, COLUMN_4, COLUMN_5, COLUMN_6, CONTADOR, LOADER_BAR);
            setTimeout(() => {
                generarHome(SECTION_1);
            }, 2000)
        }
    }, 47);

    setTimeout(() => {
        document.body.style.overflow = 'auto';
    }, 9200);
});


function ejecutarAnimacion(col1, col2, col3, col4, col5, col6, contador, loader_bar) {
    const aplicarReboteYTransicion = (columna, delay) => {
        setTimeout(() => {
            // Aplicar la animación de rebote
            columna.style.animation = 'bounce 1s ease';

            setTimeout(() => {
                // Limpiar la animación de rebote
                columna.style.animation = '';

                // Aplicar la transición suave
                columna.style.transform = 'translateY(-700px)';
                columna.style.transition = 'transform 0.5s ease';
                contador.style.opacity = 0;
                loader_bar.style.opacity = 0;
            }, 1100); // Duración del rebote
        }, delay);
    };

    aplicarReboteYTransicion(col1, 100);
    aplicarReboteYTransicion(col2, 500);
    aplicarReboteYTransicion(col3, 900);
    aplicarReboteYTransicion(col4, 1300);
    aplicarReboteYTransicion(col5, 1700);
    aplicarReboteYTransicion(col6, 2100);
}

function generarHome(section) {
    section.innerHTML += `<img id="arbol_3" class="arbol_3 crecimientoVertical" src="./assets/imgs/arbol_3.png">
                        <img id="arbusto_3" class="arbusto_3 elem-animado-derecha" src="./assets/imgs/arbusto_3.png">
                        <img id="sombra_muñeco_3" class="sombra_muñeco_3 aparicionEspontanea" src="./assets/imgs/sombra_muñeco_3.png">
                        <img id="muñeco_3" class="muñeco_3 entradaSuperior" src="./assets/imgs/muñeco_3.png">
                        <img id="arbusto_2" class="arbusto_2 elem-animado-derecha" src="./assets/imgs/arbusto_2.png">
                        <img id="sombra_muñeco_2" class="sombra_muñeco_2 aparicionEspontanea" src="./assets/imgs/sombra_muñeco_2.png">
                        <img id="muñeco_2" class="muñeco_2 entradaSuperior" src="./assets/imgs/muñeco_2.png">
                        <img id="arbol_2" class="arbol_2 crecimientoVertical" src="./assets/imgs/arbol_2.png">
                        <img id="piedra_2" class="piedra_2 elem-animado-derecha" src="./assets/imgs/piedra_2.png">
                        <img id="muñeco_1" class="muñeco_1 entradaSuperior" src="./assets/imgs/muñeco_1.png">
                        <img id="sombra_muñeco_1" class="sombra_muñeco_1 aparicionEspontanea" src="./assets/imgs/sombra_muñeco_1.png">
                        <img id="piedra_3" class="piedra_3 elem-animado-derecha" src="./assets/imgs/piedra_3.png">
                        <img id="piedra_1" class="piedra_1 elem-animado-derecha" src="./assets/imgs/piedra_1.png">
                        <img id="arbusto_4" class="arbusto_4 elem-animado-izq" src="./assets/imgs/arbusto_4.png">
                        <img id="arbol_1" class="arbol_1 crecimientoVertical_arbol_1" src="./assets/imgs/arbol_1.png">
                        <img id="piedra_4" class="piedra_4 elem-animado-izq" src="./assets/imgs/piedra_4.png">
                        <img id="arbusto_1" class="arbusto_1 elem-animado-izq" src="./assets/imgs/arbusto_1.png">
                        <img id="fondo" class="fondo" src="./assets/imgs/fondo.png">`
}





