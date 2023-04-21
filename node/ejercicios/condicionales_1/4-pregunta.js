/**
 * Este script pide al usuario que teclee una letra entre A, B, C, D. Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó...
 * 
 * Es como un juego en el que la opción correcta es A y las demás presentan mensaje de error o de que "has perdido el juego"
 * 
 * Si pulsa C le dará mensaje de error.
 * si pulsa A le sale mensaje de "correcto" o "ha acertado"
 * etc
 * 
 * Variante del 4 para responder a una pregunta usando las opciones
 */

let respuesta = prompt("¿Qué tecnología se usa para hacer los elementos de una web? \n(a)CSS \n(b)HTML \n(c)JS \n(d))XML\n\nEscribe la letra de la opción.")
let mensaje = ""
if(respuesta.toUpperCase() == 'B'){
    mensaje = "Has acertado!🚀"
} else {
    mensaje = "No has acertado :("
}
alert(mensaje)