/*
Escribe un script que responda al evento scroll y que muestre un boton o bloque div en el fondo de la pantalla cuando deje de verse la linea superior del documento
*/

document.addEventListener("scroll", (event) => {
    let navbar = document.getElementById("navbar");
    let footer = document.getElementById("footer");
    let maximoScrollEnY = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ) - window.innerHeight;
    // Si el usuario hace scroll más de 100 px cambiamos el navbar a fixed
    if(window.scrollY > 100){
        navbar.classList.add("fixed");
    }else{
        navbar.classList.remove("fixed");
    }
    // Footer. Si estamos entre los 100 y alrededor de los ~800 px se coloca el estilo fondo negro y fixed, por encima de los ~800px se quita ese estilo y vuelve a marrón
    if(window.scrollY > 100 && window.scrollY < maximoScrollEnY - window.innerHeight/2){
        footer.classList.add("fixed2");
    }else{
        footer.classList.remove("fixed2");
    }
    // console.log(window.scrollY, maximoScrollEnY - window.innerHeight/2)
});