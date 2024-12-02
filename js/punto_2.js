const menuButton = document.querySelector('#menuButton');
const menu = document.querySelector('#menu');
const menuItems = document.querySelectorAll('.menu ul li');

let isActive, currentItem;
document.querySelector('#menuButton').addEventListener('click', async function () {
    isActive = menu.classList.contains('active');

    if(isActive) {
        /* Este agarra las 3 clases de boton_hamburguesa_desactive y elimina el estilo anterior */
        menuButton.classList.remove('active');
        menu.classList.remove('active');
        menuButton.classList.add('desactive');
    } else {
        /* Este agarra las 3 clases de boton_hamburguesa_active */
        menuButton.classList.remove('desactive')
        menu.classList.remove('desactive');
        menuButton.classList.add('active');
        menu.classList.add('active');
    }
    
    // Mostrar u ocultar el menú
    if (menu.classList.contains('active')) {
        // Mostrar opciones con retraso
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('active'); // Activar animación
                item.classList.remove('hidden'); // Asegurarse de que la clase 'hidden' sea eliminada
            }, index * 240); // Incrementa el retraso por opción
        });
    } else {
        isActive = false;
        await detenerAnimacion();
        isActive = true;
    }
});

async function detenerAnimacion() {
    return new Promise((resolve) => {
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('hidden'); // Activar clase de ocultación
                item.classList.remove('active'); // Asegurarse de que la clase 'active' sea eliminada
            }, index * 200); // Incrementa el retraso por opción
        });

        // Resolvemos la promesa después de que todas las animaciones hayan sido detenidas
        setTimeout(() => {
            resolve(); // Esto indica que la animación ha terminado
        }, menuItems.length * 200); // Esperamos el tiempo total de la animación
    });
}
