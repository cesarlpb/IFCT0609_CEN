/**
 * 
 * En este ejercicio el script convertirá las notas numéricas de un examen en palabras: 0 - 4 suspenso, 5-6 aprobado, 7-8 notable, 9-10 sobresaliente.
 * 
 * 0 a 4 => suspenso
 * 5 a 6 => aprobado
 * 7 a 8 => notable
 * 9 a 10 => sobresaliente
 * 
 * Si tecleo 8 me dirá "Tu calificación es  notable"
 */

let nota = Math.round(prompt("Introduce tu nota:"))
let mensaje = ""

switch(nota){
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        mensaje = "suspenso"
        break;
    case 5:
    case 6:
        mensaje = "aprobado"
        break;
    case 7: 
    case 8:
        mensaje = "notable"
        break;
    case 9:
    case 10:
        mensaje = "sobresaliente"
        break;
    default:
        // -1 o NaN, etc.
        mensaje = "El dato introducido no es correcto.\nDebe ser un número del 0 al 10"
}
alert(mensaje)