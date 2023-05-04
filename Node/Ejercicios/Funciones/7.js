/**
 * 
 * 
 * Escribir una función que reciba un número como argumento y lo devuelva invertido, o sea, escrito del revés. Usar esta función para determinar si un número es capicúa (palíndromo)
 * 
 * 
 * Si ejecuto invertir(123) me deberá devolver el número 321 y me diría que no es capicua. Sin embargo si hago invertir(242) el resultado sería 242, y la prueba me diría que es capicúa.
 * 
 * invertir(123) -> 321 y mensaje ("no es capicúa")
 * invertir(121) -> 121 y mensaje ("es capicúa")
 * 
 */

// num a str -> "321"
// bucle que crea nuevoStr y colocamos los caracteres del revés

function invertir(num){
    let string = String(num)
    let nuevoString = ""
    for (let i = string.length-1; i>=0; i--){
        nuevoString += string[i]
    }
    return nuevoString // string
}

let num = 123
let numInvertido = invertir(num) 

if( num == numInvertido ){
    alert("Es capicúa o palíndromo")
} else {
    alert("No es capicúa ni palíndromo")
}
