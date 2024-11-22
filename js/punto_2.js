const menuButton = document.querySelector('#menuButton');
const menu = document.querySelector('#menu');
const menuItems = document.querySelectorAll('.menu-item');

let isActive, currentItem;
document.querySelector('#menuButton').addEventListener('click', function () {
    isActive = menuButton.classList.contains('active');

    if(isActive) {
        /* Este agarra las 3 clases de boton_hamburguesa_desactive y elimina el estilo anterior */
        menuButton.classList.remove('active');
        menu.classList.remove('active');
        menuButton.classList.add('desactive');
        menu.classList.add('desactive');
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
                item.parentElement.classList.remove('desanimate');
                item.parentElement.classList.add('animate');
            }, index * 200); // Incrementa el retraso por opción
        });
    } else {
        menuItems.forEach((item, index) => {
            item.parentElement.classList.remove('animate');
            item.parentElement.classList.add('desanimate');
        });
    }
});