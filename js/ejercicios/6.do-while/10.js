/**
 * 
 * Escribir un script para determinar si el numero introducido por el usuario es un palíndromo, es decir, un número que se lee igual del derecho que del revés.

* Para invertir el número podéis hacer sucesivas divisiones entre 10: el resto lo añadis al inveso multiplicado por 10. Y repetis con el valor entero del numero dividido por 10.
 * 

Si escribo el número 12421 me dirá que "12421 es un palíndromo".

esPalindromo ?
11      true
12      false
121     true
12421   true
'ala'   true
'llama' false
'eye'   true
etc
 */

// Algoritmo 1:
/*
    string = "ala" -> string[0] == string[2] true // "a" == "a"
    aaXaa
    aaaxaaa -> 0 6
               1 5
               2 4
    Comparaciones:
    primero - último
    segundo - penúltimo
    etc

    Nos damos cuenta de que el caracter de "en medio" no hace falta compararlo

*/

// Algoritmo 2
/* 
    string = "ala" -> invertir string "ala" -> son iguales
    string = "casa" -> invertir -> "asac" -> no es palíndromo
    
    comparar string original con string invertido
*/

// Método 1 - comparaciones caracter a caracter
let string = prompt("Introduce un número:")
let comparaciones = parseInt(string.length / 2) // 4 -> 2, 3 -> 1, etc.
let contador = 0 // comparaciones = 1 -> 0
                 // comparaciones = 2 -> 0, 1
                 // contador < comparaciones
let contadorIguales = 0
do {
    let charIzq = string[contador]
    let charDer = string[string.length - 1 - contador]
    if( charIzq == charDer ){
        contadorIguales++
        // console.log(contador, charIzq, charDer)    
    }else{
        // console.log(contador, charIzq, charDer)   
        // Este else para el bucle al primer false que se encuentra comparando
        // En este caso NO se lee todo el string para comparar 
        contador = comparaciones // para el bucle
    } 
    contador++
} while( contador < comparaciones )
// En algunos casos no lee todo el string
// Solo leería todo si es palíndromo

if(contadorIguales == comparaciones){
    alert(`${string} es palindromo`)
} else {
    alert(`${string} no es palindromo`)
}

// Método 2 - invertir string y comparar al final

/*
let string = prompt("Introduce un número:")
let contador = 0 // comparaciones = 1 -> 0
                 // comparaciones = 2 -> 0, 1
                 // contador < comparaciones
*/

// Usando las mismas variables de arriba, añadimos:
let stringInvertido = ""
do{
    let indice = string.length - 1 - contador
    stringInvertido += string[indice]
    contador++
} while( contador < string.length ) 
// Este bucle itera todo el string una vez

if(string == stringInvertido){
    alert(`${string} es palindromo`)
} else {
    alert(`${string} no es palindromo`)
}