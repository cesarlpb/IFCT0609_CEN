/* Este ejercicio dirigirá al usuario al transporte elegido, para ello le recordará que coja dinero para comprar el ticket, ya que escogió el tren.
 * 
 *  coche, tren, bicicleta o autobús
 * 
 *  tren, autobús => llevar dinero para comprar ticket
 * 
 *  coche, bicicleta => gratis
 */

let medio = prompt(`Medio de transporte para viajar:
        (a) coche
        (b) tren
        (c) bicicleta
        (d) autobús
`)        

medioDeTransporte = medioDeTransporte.toLowerCase()
let mensaje = ""

if( medioDeTransporte == "tren" || medioDeTransporte == "autobús" || medioDeTransporte == "autobus" || medioDeTransporte == "bus"){
    mensaje = `Recuerda llevar dinero para el billete de ${medioDeTransporte}`
} else if ( medioDeTransporte == "bicicleta" ){
    mensaje = "Recuerda llevar el candado, la llave y el casco"
} else if (medioDeTransporte ==  "coche") {
    mensaje = `¡Coge las llaves del ${medioDeTransporte}!`
} else {
    mensaje = `La opción "${medioDeTransporte}" elegida no es válida`
}
alert(mensaje)
// No estamos comprobando si nos introducen caracteres no válidos o espacios antes o después del string, etc.
