/*
Crea un array para albergar al menos 10 números enteros cualesquiera, luego rellena el array (o crealo ya con los valores). 
El ejercicio trata de crear a partir de este array otros dos uno con los números pares y otro con los impares. No debes usar bucles, usa el método del array qe creas más apropiado.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Usando filter() con una function:
let pares = numeros.filter(function(numero) {
    return numero % 2 == 0;
});
// Con arroy function:
let impares = numeros.filter(numero => numero % 2 == 1)