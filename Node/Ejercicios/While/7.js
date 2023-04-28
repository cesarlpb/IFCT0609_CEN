/**
 * 
 * Este script le pide al usuario que vaya tecleando números enteros positivos hasta que el usuario ingrese el 0. En esete caso el programa acaba mostrando el valor máximo y mínimo de los números tecleados.
 * 
 * El usuario teclea la sere 4,2,3,5,0
 * El máximo es 5 y el minimo es 2. 
 * Si teclea 2,2,2,0, máximo es 2 y minimo es 2.
 * 
 * Si solo consideramos números positivos:
 * 
 * 4,2,3,5,0 -> max = 5 y min = 2
 * 2,2,2,0  -> max = 2 y min = 2
 * 
 */

let num = -1
let max = -Infinity, min = Infinity;

while( num != 0 ){
    num = parseInt(prompt("Introduce un número positivo:"))
    if( !isNaN(num) && num > 0 ){
        // Estos if son independientes
        if( num > max ){
            max = num
        }
        if ( num < min ){
            min = num
        }
        // Ternario:
        // max = num > max ? num : max
        // min = num < min ? num : min
    }
}
alert("máx: " + max + "\nmín: " + min)