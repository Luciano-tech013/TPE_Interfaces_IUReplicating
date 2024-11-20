const DIV_MUÑECOS = document.querySelector('.muñecos_container');
const CANTIDAD_DE_EFECTO = 30;

// Detectar el movimiento del mouse
DIV_MUÑECOS.addEventListener('mousemove', (e) => {
    // Obtener el tamaño del contenedor y las coordenadas del mouse
    const { width, height, left, top } = DIV_MUÑECOS.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    // Calcular la posición relativa del mouse (0 a 1)
    // si es 0, esta a la izquierda, si esta al centro es 0.5, si esta a la derecha es 1
    const percentX = mouseX / width;
    const percentY = mouseY / height;

    // Invertir el movimiento y aplicar un factor de traslación
    let translateX = (0.5 - percentX) * CANTIDAD_DE_EFECTO; // Ajusta el factor
    let translateY = (0.5 - percentY) * CANTIDAD_DE_EFECTO;

    const maxTranslateX = (width / 2) - (CANTIDAD_DE_EFECTO / 2);
    const maxTranslateY = (height / 2) - (CANTIDAD_DE_EFECTO / 2);

    translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, translateX));
    translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, translateY));
    
    // Aplicar transformación
    DIV_MUÑECOS.style.transform = `translate(${translateX}px, ${translateY}px)`;
});
