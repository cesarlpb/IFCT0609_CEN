/**
 * 
 * En este ejercicio el usuario entra la longitud de la base y el alto de un cuadrado. 
 * Si la base y el alto son idénticos la respuesta será "Es un cuadrado", 
 * 
 * si la base es mayor que el alto dira "Rectángulo horizontal" y en caso contrario dirá "Rectángulo vertical".
 * 
 * base == altura   => cuadrado
 * base > altura    => rect horizontal
 * altura > base    => rect vertical
 * 
 * Si entro base es 10, alto es 5. Resultado rectángulo horizontal
 * etc.
 */

let base = Number(prompt("Introduce la base del cuadrilátero:"))
let altura = Number(prompt("Introduce la altura del cuadrilátero:"))
let mensaje = ""

if(isNaN(base) || isNaN(altura)){
    mensaje = "Las entradas de valores son incorrectas"
} else {
    if( base == altura ){
        mensaje = "Es un cuadrado"
    } else if ( base > altura ){
        mensaje = "Es un rectángulo horizontal"
    } else {
        mensaje = "Es un rectángualo vertical"
    }
}

alert(mensaje)
