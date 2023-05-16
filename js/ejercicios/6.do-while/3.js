/**
 * 
 * En este script vas a crear un menu con tres opciones: escribir, leer, salir. El usuario elegirá una opción y en un alert se le indicará la opción elegida. 
 * El programa vuelve a mostrar el menu y se repite el proceso. 
 * El script acabará cuando se pulse la opción de salir.
 * 
 * El menu tiene 3 opciones, elijo la opción 2, respuesta "has elegido leer".
 * 
 */

let opciones = [1, 2, 3]
let mensaje = "Opción no válida"
let mensajes = ["Escribiste", "Leiste", "Saliste"]
let miPrompt = `
    1 - escribir
    2 - leer
    3 - salir
`
let opcionElegida;
do{
    opcionElegida = parseInt(prompt("Elige una de las opciones:" + miPrompt))
    let indice = opciones.indexOf(opcionElegida)
    if( indice != -1 ){
        mensaje = mensajes[indice]
    } else {
        mensaje = "Opción no válida"
    }
    alert(mensaje)
} while ( opcionElegida != 3 )