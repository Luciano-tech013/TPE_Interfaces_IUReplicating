document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const logo = document.getElementById('logo');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        heroParalax(scrollY);
        modificarHeader(scrollY);
    });


    // FUNCIONES PARA ANIMAR CADA SECCIÓN
    function modificarHeader(scrollY) {
      // Límites de transformación del logo (posición y tamaño)
      const maxScroll = 400;  // Valor máximo de scroll
      const maxWidth = 560;   // Tamaño inicial del logo (cuando no hay scroll)
      const minWidth = 110;   // Tamaño final del logo (cuando el scroll llega a maxScroll)
      const maxTop = 55;      // Posición inicial del logo (cuando no hay scroll)
      const minTop = 10;    // Posición final del logo (cuando el scroll llega a maxScroll)

        // Se calcula el nuevo tamaño y posición en función del scroll
        const width = Math.max(minWidth, maxWidth - (scrollY / maxScroll) * (maxWidth - minWidth));
        const top = Math.max(minTop, maxTop - (scrollY / maxScroll) * (maxTop - minTop));
       
        // Se aplican los valores calculados al logo
        logo.style.width = `${width}px`;
        logo.style.height = `${(width * 0.57)}px`;
        logo.style.top = `${top}px`;

        // Gradiente del header en función del scroll
        var opacidad = Math.min(scrollY / maxScroll, 1); // La opacidad va de 0 a 1 según el scroll
        var gradiente = `linear-gradient(to bottom, rgba(0, 209, 213, ${opacidad}), rgba(0, 209, 213, ${opacidad * 0.12}) 88%, rgba(0, 209, 213, 0))`;
        header.style.backgroundImage = gradiente;
    }

    function heroParalax(scrollY){
        const arbolChico = document.getElementById('arbol_1');
        const arbolMediano = document.getElementById('arbol_2');
        const arbolGrande = document.getElementById('arbol_3');
        const arbusto1 = document.getElementById('arbusto_1');
        const arbusto2 = document.getElementById('arbusto_2');
        const arbusto3 = document.getElementById('arbusto_3');
        const arbusto4 = document.getElementById('arbusto_4');
        const roca1 = document.getElementById('piedra_1');
        const roca2 = document.getElementById('piedra_2');
        const roca3 = document.getElementById('piedra_3');
        const roca4 = document.getElementById('piedra_4');
        const pj1 = document.getElementById('muñeco_1');
        const pj2 = document.getElementById('muñeco_2');
        const pj3 = document.getElementById('muñeco_3');
        const sombra1 = document.getElementById('sombra_muñeco_1');
        const sombra2 = document.getElementById('sombra_muñeco_2');
        const sombra3 = document.getElementById('sombra_muñeco_3');
        
        arbusto1.style.left = 197.062 - scrollY * 0.4 + "px"; 
        arbusto2.style.left = 1080.97 + scrollY * 0.5 + "px";
        arbolChico.style.left = -153 - scrollY * 0.2 + "px"; 
        arbolMediano.style.left = 881.03 + scrollY * .3 + "px";
        roca1.style.left = 1042.598 + scrollY * .6 + "px"; 
        roca2.style.left = 1035.192 + scrollY * .5 + "px"; 
        roca3.style.left = 1072.218 + scrollY * .8 + "px"; 
        arbusto4.style.left =  161.383 - scrollY * .8 + "px"; 
        arbolGrande.style.left = 1080.97 + scrollY * .4 + "px"; 
        roca4.style.left =  129.069 - scrollY * .8 + "px"; 
        arbusto3.style.left =  1028.46 + scrollY * .44 + "px"; 

        if(scrollY <= 250){
            pj1.style.top = 500 - scrollY * .4 + "px";
            pj2.style.top = 403 - scrollY * .5 + "px";
            pj3.style.top = 338 - scrollY * .6 + "px";
            sombra1.style.top = 732 - scrollY * .4 + "px";
            sombra2.style.top = 704 - scrollY * .4 + "px";
            sombra3.style.top = 670 - scrollY * .4 + "px";
        }
    }
});
