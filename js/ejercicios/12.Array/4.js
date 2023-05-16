/*
Crea un array de al menos 10 elementos para guardar números enteros. Usa un método para obtener la suma de los números pares y la de los números impares.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// acc =  acumulador -> variable que retiene la suma actual
// numero -> elemento actual del array
// 0 es el valor inicial de acc
function sumar(acc, numero){
    console.log(acc, numero, acc+numero)
    return acc + numero
}
let suma = numeros.reduce(sumar, 0) // callback -> sumar se pasa como definición, y no se ejecuta directamente en ese momento hasta empezar la iteración

// con arrow function sería:
// let suma = numeros.reduce((acc, numero) => acc + numero, 0)