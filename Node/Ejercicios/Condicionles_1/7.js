/*
Este programa te ayuda a viajar. 
El programa pide al usuario si va a viajar con coche, tren, bicicleta o autobús. Si va en tren o autobus le recordará que lleve dinero para el billete.
coche, tren, bicicleta o autobús
tren o autobús => recuerda llevar dinero para el billete
El cliente pide ir en tren, aparecerá el mensaje "lleva dinero para el ticket"
*/

let medioDeTransporte = prompt(`Introduce tu medio de transporte para el viaje:
    coche
    tren
    bicicleta
    autobús
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