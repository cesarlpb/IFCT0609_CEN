/**
 * 
 * Este script le pide al usuario que vaya tecleando números una y otra vez, pero solo números pares, en caso de que teclee un número impar el programa acabará y dirá la cantidad de números pares ingresados (el 0 cuenta como par).
 * 
 * Muestra Si escribo 2,8,12,1 el script me dirá "Ha escrito 3 números pares")
 * 
 * 2 4 5 -> 2 pares
 * 2 4 8 0 7 -> 4 pares
 * etc
 * 
 */

let num; // undefined
let contador = 0, mensaje = "", esImpar = false 

while ( !esImpar ){
    num = parseInt(prompt("Introduce un número par:"))
    if( !isNaN(num) ){
        // si queremos considerar solo los positivos y el cero añadimos && num >= 0 a la condición:
        esImpar = num % 2 != 0 ? true : false // aquí consideramos también los negativos
        if(!esImpar){
            // al estar dentro de !isNaN(num) sabemos que es número válido y, por lo tanto, si esImpar = false => necesariamente es número par 
            contador++
        }
    }
}
mensaje = "Cantidad de números pares: "
alert(mensaje + contador)