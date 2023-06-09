/**
 * Se quiere tener un contador de dos dígitos en base 5. 
 * 
 * El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. El contador debe detenerse cuando alcancemos el valor 1:4
 * 
 * 0:0 0:1 0:2 0:3 0:4
 * 1:0 1:1 1:2 1:3 1:4
 * 
 * 00 01 02 03 04
 * 10 11 12 13 14
 * 100 101 ...
 * 
 */

// i:j
let mensaje = ""
for(let i = 0; i < 2; i++){
    // filas 0 y 1
    for(let j = 0; j < 5; j++){
        // columnas 0, 1, 2, 3, 4
        mensaje += `${i}:${j} `
    }
    mensaje += "\n"
}
console.log(mensaje)