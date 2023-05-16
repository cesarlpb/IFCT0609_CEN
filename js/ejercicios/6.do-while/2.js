/**
 * 
 * Este script usará un bucle do while para determinar si un número es primo o no. El numero tecleado deberá estar entre 0 y 100. Si es primo lo mostrará en una ventana alert
 * 
 * Si escribo 0 o 100 el programa me seguirá pidiendo un número
 * 
 * Si el número es primo, escribimos "Es primo"
 * En caso contrario, escribimos "No es primo"
 * 
 */

let num, mensaje = "No es un número válido"; 
let esPrimo = false // iniciamos suponiendo que no tenemos número primo
do{
    num = parseInt(prompt("Introduce un número entero:"))
    esPrimo = verificarPrimo(num)
} while( num < 0 || num > 100 )
if(esPrimo){
    mensaje = `${num} es primo`
} else {
    mensaje = `${num} no es primo` // NaN...
}
alert(mensaje)

function verificarPrimo(num){
    if(!isNaN(num)){
        for(let i = 2; i < num; i++){
            if(num % i == 0){
                return false // no es primo
            }
        }
    } else {
        return false // este false es cuando me dan NaN
    }
    return true // es primo
}
