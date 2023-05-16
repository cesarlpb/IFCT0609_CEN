/*
 * No todo van ser números. Escribe un código que dado un número nos devuelva true si es un número par y false si es un número impar. No usar condiconales.

numero: 50

¿Es par? : true
 */

let numero = Number(prompt("Introduce un número:"))
// Método 1
console.log("Calculando cociente y resto:")
let cociente = Math.floor(numero / 2)
let resto = numero - cociente * 2
console.log(cociente, resto) // informativo
if(resto === 0){
    console.log("Es par:", true)
} else {
    console.log("Es par:", false)
}
// Método 2
console.log("Usando %")
if(numero % 2){
    console.log("Es par:", false)
} else {
    console.log("Es par:", true)
}