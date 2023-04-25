/**
 * Si la base y el alto son idénticos la respuesta será "Es un cuadrado", si la base es mayor que el alto dira "Rectángulo horizontal" y en caso contrario dirá "Rectángulo vertical".
 *
 * base = altura: cuadrado 
 * base < altura: rect. horizontal
 * base > altura: rect. vartical
 */
let base = Number (prompt("Introduce la base del cuadrado"))
let altura = Number (prompt("Introduce la altura del cuadrado"))
let mensaje = ""

if(isNaN(base) || isNaN(altura)){
    mensaje = "las entradas de valores son incorrectas"
} else {
    if( base == altura ){
        mensaje = "Es un cuadrado"
    } else if ( base < altura ){
        mensaje = "Es un rectángulo horizontal"
    } else {
        mensaje = "ES un rectángulo vertical"
    }
}

alert(mensaje)