/**
 * 
 * Definir una función que cree una cadena de letras repetidas tantas veces como le digamos. La función recibe dos argumentos: la letra y el número de repeticiones.
 * 
 * Al ejecutar repetir('a', 5) deberá devover la caden "aaaaa".
 * 
 */

let texto = prompt("Introduce un caracter:")
let char = "";
if(texto.length > 0){
    char = texto[0]
}
let num = parseInt(prompt("Introduce el número de repeticiones:"))
alert(repetir(char, num))

function repetir(char, num){
    // opciones válidas son los bucles for, while, do while... 
    return char.repeat(Math.abs(num)) // repeat() solo arroja error cuando el número es negativo, por eso usamos valor absoluto
}
