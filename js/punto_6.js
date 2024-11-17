const img = document.querySelector(".cuadrado_img");

const imgs = ["./assets/imgs/imagen_2.png", "./assets/imgs/imagen_3.png", "./assets/imgs/imagen_4.png"]

img.style.backgroundImage = "url('./assets/imgs/imagen_2.png')";

let index = 1;
function changeImage() {
    img.style.backgroundImage = `url(${imgs[index]})`;
    img.style.backgroundRepeat = 'no repeat';

    if(index === 2)
        index = 0
    else
        index += 1;
}

setInterval(changeImage, 1000);

