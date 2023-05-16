/**
 * 
 * Un script pedirá al usuario que vaya tecleando números hasta llegar al 0, entocnes el programa muestra "La suma es " seguido de la suma de los números. 
 * Si esta suma es par el programa se repite y si es impar el programa acaba.
 * 
 * Si tecleo 2,6,2, 0 -> Me dirá suma "10" y volverá a pedir otra serie de números
 * Si tecleo 2,6,3, 0 -> Me dirá "suma 11" y acabará.
 */

let suma = 0 // par
let num = 0, mensaje = "", debeTerminar = false

while ( num != 0 || !debeTerminar ){
    num = parseInt(prompt("Ingresa un número:"))
    if(!isNaN(num)){
        suma += num // suma no puede ser NaN
        // con ternario:
        // suma += !isNaN(num) ? num : suma
    }
    if( num == 0 ){
        alert(`Suma: ${suma}`) // también importante que vaya antes de resetear la suma a 0
        debeTerminar = suma % 2 != 0 ? true : false // hay que verificar si la suma es par o impar antes de resetear el valor de suma a 0 <---- importante!
        suma = 0
    }
    if( suma %2 != 0 ){
        num = 0 // num = 0 es una condición para terminar el programa
        // con ternario:
        // num = suma %2 != 0 ? 0 : num
    }
}