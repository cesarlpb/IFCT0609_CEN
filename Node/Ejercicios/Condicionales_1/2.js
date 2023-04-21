
 

/**
 * Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo
 * 
 * Si num1 es 2 debe decir que num1 es positivo
 * 
 */

let num = Number(prompt("Introduce un número:"))
if(num < 0){
    // estrictamente menor que cero
    console.log(`${num} es negativo`)
} else {
    // igual o mayor que cero
    console.log(`${num} es positivo`)
}

// No estamos comprobando si nos pasan otro tipo de dato que al convertir con Number daría NaN
