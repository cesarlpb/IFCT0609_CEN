/*
En este ejercicio debes pedir dos números enteros y devolver el cociente de dividir el primero entre el segundo, pero si este es cero no debe hacer la división, sino lanzar un mensaje de error
Si se entran el número 8 y 2, debe resultar 4
Si se entran 4 y 0, dbe resultar en un mensaje de error.
*/ 

let dividendo = Number(prompt("Introduce un número:"))
let divisor = Number(prompt("Introduce el divisor:"))

if( divisor === 0 ){
    console.error("No se puede dividir por cero")
} else {
    console.log(`${dividendo} / ${divisor} = ${dividendo / divisor}`)
}