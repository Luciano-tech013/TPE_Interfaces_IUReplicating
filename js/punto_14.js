document.querySelector('.boton_comprar_container').addEventListener('click', function () {
    const button = this.querySelector('.boton_comprar');

    // Añadir clase para animación
    button.classList.add('golpe');

    // Remover clase después de la animación
    setTimeout(() => {
        button.classList.remove('golpe');
    }, 200); // Duración de la animación en milisegundos
});
