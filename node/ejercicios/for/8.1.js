/**
 * Triángulo invertido a la izq

*****
****
***
**
*

Triángulo a la derecha
    *
   **
  ***
 ****
*****

Triángulo a la derecha invertido
etc


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