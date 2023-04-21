/* 
En este script debes pedir al usuario un programa de dos dígitos y debes devolver el número de unidades y de decenas, o sea, cada dígito del número.
Recuerda si divides un número entre 10 el cociente entero es el número de decenas y el resto es el número de unidades
Si ese teclea el número 45
Unidades: 5
Decenas: 4
*/

// Pegad esto en el navegador: 
let numero = prompt("Introduce número de dos dígitos:") // string
let decenas = numero[0]
let unidades = numero[1]
console.log(decenas, "decenas")
console.log(unidades, "unidades")

// Limitación: la lógica no contempla números de más dígitos
