/*
La página descrita con este código HTML posee dos bloques div cuyos atributos id son cX, cY. Debes escribir un manejador para el evento de movimiento del ratón por el documento. Este script deberá anotar en los cuadros cX y cY las coordenadas donde se encuentra el puntero del ratón mientras se mueve por todo el documento.
*/
function seguirCursor(event){
    /*
    console.log(event)
    console.log("Tamaño de la pantalla (px):")
    console.log("height:", window.innerHeight);
    console.log("width:", window.innerWidth);
    console.log("Coordenadas del cursor en la pantalla (px):")
    console.log("clientX:", event.clientX);
    console.log("clientY:", event.clientY);
    console.log("Coordenadas en la página (px)")
    console.log("pageX:", event.pageX);
    console.log("pageY:", event.pageY); // si se ha hecho scroll, esta coordenada es mayor que clienX que depende del tamaño de la pantalla
    */
    // Comentamos los console.log() de antes para que salgan menos datos por console y dejamos este:
    // console.log(event.clientX, event.clientY)
    // Colocamos los valores en los inputs:
    let cX = document.getElementById("cX").value = event.clientX;
    let cY = document.getElementById("cY").value = event.clientY;
    // Observación: también podemos usar event.x y event.y
}