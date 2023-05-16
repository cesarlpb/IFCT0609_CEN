/**
 * 
 * En este script se trata de calcular el máximo común divisor de dos números. 
 * El algorimto es simple: dividimos el primeer por el segundo. 
 * Si el resto es cero este segundo es el mcm. 
 * Si no se desecha el primero y se repite el proceso con el segundo y el resto. Así mientras el resto no sea 0
 * 
 * 
 * Si tecleo 20 y luego 10, el MCD es 10. 
 * Si tecleo 4 y luego 20 el MCD será 4. 
 
 *  20  10  4   7   8
 *  1   1   1   1   1    <--- MCD(20, 10, 4, 7)
 *  2   2   2       2    <--- MCD(20, 10, 4)
 *  4       4       4    <--- MCD(20, 4) MCD(20, 8) MCD(20, 4, 8)
 *  5   5
 *              7
 *                  8
 *  10  10 <--- MCD(20, 10)
 *  20
 
 * Si tecleo 20 y 8 el MCD es 4.
 */

let num1 = parseInt(prompt("Introduce el primer número:"))
let num2 = parseInt(prompt("Introduce el segundo número:"))
let contador = 1
let mcd = 1

do {
    if( num1 % contador == 0 && num2 % contador == 0){
        mcd = contador
    }
    // Este algoritmo NO se salta números, itera desde el 1 hasta el mínimo de los números que nos han introducido
    // console.log(contador)
    contador++
} while( contador <= Math.min(num1, num2) )

alert(mcd)