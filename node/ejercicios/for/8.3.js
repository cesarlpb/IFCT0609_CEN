/**
 * Rectángulo:

num1 -> 3 // base
num2 -> 5 // altura

* * *
* * *
* * *
* * *
* * *

num1 -> 5 // base
num2 -> 3 // altura

* * * * *
* * * * *
* * * * *

 */

// Modificamos el siguiente código:
let num = prompt("Introduce un número entero:")
let mensaje = ""

if(num == parseInt(num) && Number(num) > 0){
    for(let i = 0; i<=num; i++){
        for(let j = 0; j<i; j++){
            mensaje += "*"
        }
        mensaje += "\n"
    }
}else{
    mensaje = "Debes introducir un número positivo"
}
console.log(mensaje)