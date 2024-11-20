const IMG = document.querySelector(".cuadrado_img");
const IMGS = ["./assets/imgs/imagen_2.png", "./assets/imgs/imagen_3.png", "./assets/imgs/imagen_4.png"]

IMG.style.backgroundImage = "url('./assets/imgs/imagen_2.png')";

let index = 1;
function changeImage() {
    // Cambiar el fondo
    IMG.style.backgroundImage = `url(${IMGS[index]})`;
    index === 2 ? index = 0 : index += 1;
}

setInterval(changeImage, 3000);

