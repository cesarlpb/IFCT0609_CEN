/**
 * A partir de un número de mes tecleado por un usuario el programa debe indicar la estación del año.

Las estaciones serán:
    12,1,2  : Invierno 
    3,4,5   : Primavera 
    6,7,8   : Verano 
    9,10,11 : Otoño
 * 
    Si nos ingeresa algo fuera del 1 al 12 o texto, respondemos que no es una entrada válida
 */

// Switch

let mes = parseInt(prompt("Introduce el mes:")) // número entero o NaN
let mensaje = "Es "

switch(mes){
    case 12:
    case 1:
    case 2:
        mensaje += "invierno"
        break;
    case 3:
    case 4:
    case 5:
        mensaje += "primavera"
        break;
    case 6:
    case 7:
    case 8:
        mensaje += "verano"
        break;
    case 9:
    case 10:
    case 11:
        mensaje += "otoño"
        break;
    default:
        // NaN, 0, -1, etc.
        mensaje = "No es una entrada válida" 
}

alert(mensaje)