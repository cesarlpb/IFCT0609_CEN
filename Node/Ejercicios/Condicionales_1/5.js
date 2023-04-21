/**
 * 
 * En este ejemplo el usuario entrará dos números. Debe devvolver la diferencia entre el mayor y el menor
 * 
 * Si el usuario entre el 5 y el 8, el programa devolverá 3 (8 - 5)
 * 
 * 5 y 5 => 0
 * 
 * 1 y 2 => 1
 */

let numero1 = parseInt(prompt("Introduce el primer número:"))
let numero2 = parseInt(prompt("Introduce el segundo número:"))

// Método 1 - usando if
if( numero1 > numero2 ){
    console.log("Diferencia:", numero1 - numero2)
} else {
    console.log("Diferencia:", numero2 - numero1)
}

// Método 2 - sin if

// Math.abs() es el valor absoluto == coloca el resultado dentro del parentesis en positivo
/*
-1 => 1     0 => 0      1 => 1
*/
console.log("Diferencia sin if:", Math.abs(numero1 - numero2))


