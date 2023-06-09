/*
Escribe un script de nombre creaDiv() que crea un nuevo bloque div en la página modelo. El bloque se creará al pulsar el botón con texto Crear, sus colores serán texto blanco con fondo rojo y el texto quedará centrado. Este texto consiste en la cadena "Javascript permite crear páginas dinámicas".
*/
function crearDiv(){
    // Ej 3
    let div = document.createElement("div"); // creamos elemento indicando etiqueta
    div.style.backgroundColor = "red";
    div.style.color = "white";
    div.style.textAlign = "center";
    div.style.padding = "24px";
    div.style.width = "300px";
    div.style.margin = "12px auto";
    div.style.border = "1px solid black";
    div.style.borderRadius = "12px";
    div.innerText = "Javascript permite crear páginas dinámicas";
    // Colocamos el div dentro de container
    let container = document.getElementById("container");
    container.appendChild(div); // Añadimos el div a container (dentro)
}
