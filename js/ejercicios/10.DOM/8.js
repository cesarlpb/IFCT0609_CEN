/*
Escribe el código de una función nuevoBloque() que deberá crear un nuevo elemento div, con una class de nombre destacar. El bloque contendrá, en negrita, el texto Página Modelo. Este bloque debe aparecer justo antes del bloque subtitulo es decir justo después del titular de la página. Se activará con el botón superior que contiene el texto Subtitulo
*/
function intercalar(){
    // Ej 8
    let div = document.createElement("div"); // Creamos elemento div
    
    div.classList.add("destacar"); // Añadimos clase destacar
    div.style.fontWeight = "bold"; // Añadimos negrita
    
    // Centramos el div:
    div.style.textAlign = "center"; // Añadimos centrado
    div.style.padding = "12px"; // Añadimos padding
    div.style.width = "300px"; // Añadimos ancho
    div.style.margin = "12px auto"; // Añadimos margen
    
    div.innerText = "Página Modelo"; // Añadimos texto
    
    // Si lo queremos colocar en header después del <h1>:
    let header = document.getElementsByTagName("header")[0];
    // posiciones para colocar elemento con insertAdjacentHTML:
    // beforebegin: antes del elemento padre
    // afterbegin: dentro del elemento padre, antes del primer hijo
    // beforeend: dentro del elemento padre, después del último hijo
    // afterend: después del elemento padre

    // En este ejercicio, nos sirve afterend (justo después, pero fuera del <header>) o beforeend (dentro del <header>)
    header.insertAdjacentHTML("afterend", div.outerHTML); // Añadimos el div al header
    // outerHTML nos devuelve el elemento con su etiqueta
    // innerHTML nos devuelve el contenido del elemento sin la etiqueta
}
    
