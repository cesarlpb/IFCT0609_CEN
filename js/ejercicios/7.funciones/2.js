/**
 * 
 * Esta función se va a llamar esPar(num) y deberá devolver verdadero si el argumento es par y falso si es impar. Se acepta que solo se usarán números válidos.
 * 
 * Por ejemplo al llamarla como esPar(5) me dará false, mientras que con esPar(6) me dará true.
 * 
 * 
*/

let num = parseInt(prompt("Introduce un número:"))
alert(esPar(num))

function esPar(){
    // no hacemos ninguna validación del num
    return num % 2 == 0 
}