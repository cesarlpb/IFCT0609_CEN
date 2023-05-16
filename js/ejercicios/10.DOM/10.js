/*
El primer botón de la barra de botones en la parte superior de ja página tiee el texto abrir/cerrar. Al pulsarlo se deben ocultar o mostrar los botones restantes, pero el de abrir/cerrrar debe quedar visible.
*/
function toggle(btn){
    console.log("click")
    // Ej 10
    let parent = btn.parentElement; // <section> que contiene el <div> que llama a esta función cuando se hace click
    let divs = parent.getElementsByTagName("div"); // <div>s que están dentro del <section>
    // Hacemos un bucle para mostrar u ocultar los divs salvo el primero:
    for(let i = 1; i < divs.length; i++){
        let div = divs[i];
        // Opción 1: añadimos o quitamos display inline en div
        // Si está visible, lo ocultamos:
        if(div.style.display === "inline-block" || div.style.display === ""){
            div.style.display = "none";
        }else if(div.style.display === "none" ){
            // Si está oculto, lo mostramos:
            div.style.display = "inline-block";
        }
        // Nota: inline tiene máxima prioridad

        // Opción 2: añadimos o quitamos clase oculto en div
        /*
        // Si está visible, lo ocultamos:
        if(!div.classList.contains("oculto")){
            // div.style.display = "none";
            div.classList.add("oculto");
        }else if(div.classList.contains("oculto")){
            // Si está oculto, lo mostramos:
            // div.style.display = "inline-block";
            div.classList.remove("oculto");
        }
        */
        // Nota: otra opción sería añadir o quitar una clase
        // Por ejemplo: class = "oculto" -> display: none;
    }
}
