/*
En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.

Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.

Si el usuario teclea:

3
2
4

La media de los números es 3.

*/

// Usando window.prompt()
// Hay que pegarlo en el navegador

let suma = 0
for(let i = 1; i < 4; i++){
    let numero = Number(prompt("Introduce un número:"))
    suma += numero // acumulador
}
let promedio = suma / 3
console.log("El promedio es:", promedio)
