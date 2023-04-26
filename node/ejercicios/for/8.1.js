/**
 * Triángulo a la derecha
 * espacios = num - i -> "  " + "*"
    *
   **
  ***
 ****
*****

 * Triángulo invertido a la izq

*****
****
***
**
*



Triángulo a la derecha invertido
etc


 */

// Modificamos el siguiente código:
let num = prompt("Introduce un número entero:")
let mensaje = trianguloDer(num) // global
console.log(mensaje) // en alert() la alineación es distinta pero el resultado es correcto

function trianguloIzq(num){
    let mensaje = "" // local
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
    return mensaje
}

function trianguloDer(num){
    let mensaje = "" // local
    let espacios = 0
    if(num == parseInt(num) && Number(num) > 0){
        for(let i = 0; i<=num; i++){
            espacios = num - i
            for(let k = 0; k < espacios; k++){
                mensaje += " "
            }
            for(let j = 0; j<i; j++){
                mensaje += "*"
            }
            mensaje += "\n"
        }
    }else{
        mensaje = "Debes introducir un número positivo"
    }
    return mensaje
}