/*
En la página modelo tienes un elemento div con un imagen en su interior. Cada vez que hagas click con el ratón sobre el la imagen cambiará.

El bloque tiene como clase carrousel. Dispones de tres imágenes: uno.png, dos.png y tres.png. Se deberán ir sucediendo en forma circular, despues de la última vuelve a la primera

El bloque posee un atributo data-img que almacena el nombre de la imagen visible en cada momento.
*/

function cambiaImg(){
    // Ej 9
    let imgs = ["uno.png", "dos.png", "tres.png"]; // Imágenes que tenemos disponibles para el carrusel
    /* // Otras imágenes para probar en el carrusel:
    let imgs = [
        "https://via.placeholder.com/300x150?text=1", 
        "https://via.placeholder.com/300x150?text=2",
        "https://via.placeholder.com/300x150?text=3",
        "https://via.placeholder.com/300x150?text=4",
        "https://via.placeholder.com/300x150?text=5",
        ]
    */
    let diapositiva = document.getElementById("diapo"); // <img> que contiene la imagen actual
    let imgActual = diapositiva.getAttribute("src"); // src actual en <img>
    // Opción 1. Buscamos el índice de la imagen actual en el arr
    let indiceActual = imgs.indexOf(imgActual); // Índice de la imagen actual en el arr -> -1 si no está
    // Opción 2. Buscamos el índice en data-img del div parent:
    // let indiceActual = diapositiva.parentElement.getAttribute("data-img");
    let indiceSiguiente = 0;
    if(indiceActual === -1 || indiceActual === imgs.length - 1){
        indiceSiguiente = 0; // Si no está o si es la última imagen, ponemos la primera imagen
    }else if(indiceActual < imgs.length - 1){
        indiceSiguiente = indiceActual + 1; // Si está, pasamos a la siguiente imagen
    }
    // Actualizamos src con la nueva imagen:
    diapositiva.setAttribute("src", imgs[indiceSiguiente]);
    // Actualizamos data-img con la nueva imagen
    /*
        <div>           -> diapositiva.parentElement
            <img...>    -> diapositiva
        </div>
    */
    diapositiva.parentElement.setAttribute("data-img", indiceSiguiente);
    console.log("click", indiceActual, indiceSiguiente, diapositiva.parentElement.getAttribute("data-img"))
}
