/**
 * Se trata de escribir un script que diga si un número es par o es impar.
 * Recordemos que un número es par si al dividirlo por 2 da como resto 0.
 * Si el número es 17, el programa debe decir que es impar.
 */

// Pegar en el navegador:
let num = parseInt(prompt("Introduce un número:"))
if( num % 2 == 0 ){
    console.log(`${num} es par`)
} else {
    console.log(`${num} es impar`)
}

// No estamos validando si nos pasan texto, que devolvería NaN