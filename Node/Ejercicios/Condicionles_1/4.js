/**
 * Este script pide al usuario que teclee una letra entre A, B, C, D. Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó...
 * 
 * Es como un juego en el que la opción correcta es A y las demás presentan mensaje de error o de que "has perdido el juego"
 * 
 * Si pulsa C le dará mensaje de error.
 * si pulsa A le sale mensaje de "correcto" o "ha acertado"
 * etc
 */

let respuesta = prompt("Elige una de las opciones: \nA \nB \nC \nD")
let mensaje = ""
if(respuesta.toUpperCase() == 'A'){
    mensaje = "Has acertado!"
} else {
    mensaje = "No has acertado :("
}
alert(mensaje)