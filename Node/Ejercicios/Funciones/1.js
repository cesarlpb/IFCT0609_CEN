/**
 * 
 * Crea una función que tenga dos argumentos: num1, num2, y que deuelva como resultado la suma de ambos números. Se supone que se usarán solo números válidos. 
 * 
 * Llamo a la función como sumar(3,5) deberá devolver 8.
 * 
 */

let num1 = Number(prompt("Introduce el primer número:"))
let num2 = Number(prompt("Introduce el segundo número:"))
let resultado = sumar(num1, num2) // se inicializan en línea 10 y 11
alert(resultado)

function sumar(num1, num2) {
    // no validamos los números
    return num1 + num2
}