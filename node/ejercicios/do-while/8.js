/**
 * 
 * 
Diseñar un script que pida un número mayor que cero y devuelva la suma de todos los números pares desde cero al número introducido. Mostrará la suma y volverá a pedir otro número hasta que el usuario teclee un 0.

    Si tecleo el 10 mostrará 30 la suma de 2 + 4 + 6 + 8 + 10
 * 
 */

let num = parseInt(prompt("Introduce un número:"))
let contador = 0 // 0 cuenta como par -> 0, 2, 4...
let suma = 0
if( num > 0 ){
    do{
        suma += contador
        contador += 2
    } while( contador <= num )
    alert(suma)
} else {
    alert("Debe ser un número positivo")
}