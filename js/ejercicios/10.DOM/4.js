/**
 * En la página web modelo debes lograr que al pulsar el botón con el texto borrar se deberá eliminar el bloque que aparece bajo el titular, no ocultar, sino borrarlo. Para detalles mira el código fuente de la página. Solo tienes que escribir el código de la función borrar() 
 */
function borrarDiv(){
    // Ej 4
    // Método 1: usando el id del elemento
    let subtitulo = document.getElementById("subtitulo");
    subtitulo.remove(); // Eliminamos el elemento -> no devuelve nada
    
    // Método 2: usando el padre que es body
    // let body = document.getElementsByTagName("body")[0];
    // body.removeChild(subtitulo)
}