/**
 * 
 * Usando un bucle while escribir un script que pida un valor entero y cree una lista con los números desde el 0 al valor tecleado. Luego deberá sacar esa lista con un alert. Los números se separarán por comas.  
 * 
 * Si le doy el número 5 pues deberá contar 0,1,2,3,4,5
 * 
 * Pseudocódigo
 *  - Pedir un número con prompt() -> parseInt() -> int o NaN
 *  - Inicializamos una variable contador para el while a 0 -> i
 *  - Empezamos bucle while con i = 0
    *  - i = 0 -> añadir un 0 a mensaje
    *  - ...
    *  - i = num -> añadir num a mensaje
 *  - Escribir mensaje con alert() o console.log()
 */

let num = parseInt(prompt("Introduce un número:"))
let mensaje = ""
let i = 0
while( i<=num ){

    // El mismo bucle usando ternario
    // mensaje += i < num ? i + ", " : i
    
    if(i < num){
        mensaje += i + ", "
    }else{
        mensaje += i
    }

    i++;
}
// usando slice: 
// alert(mensaje.slice(0, -2))
alert(mensaje)