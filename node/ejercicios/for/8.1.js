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

*****
 ****
  ***
   **
    *

 */

// Modificamos el siguiente código:
let num = prompt("Introduce un número entero:")
let mensaje = trianguloInvDer(num) // global
console.log(mensaje) // en alert() la alineación es distinta pero el resultado es correcto

function trianguloIzq(num){
    let mensaje = "" // local
    if(num == parseInt(num) && Number(num) > 0){
        for(let i = 0; i<=num; i++){
            // for(let j = 0; j<i; j++){
            //     mensaje += "*"
            // }
            mensaje += "*".repeat(i)
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
            // for(let k = 0; k < espacios; k++){
            //     mensaje += " "
            // }
            mensaje += " ".repeat(espacios)

            // for(let j = 0; j<i; j++){
            //     mensaje += "*"
            // }
            mensaje += "*".repeat(i)

            mensaje += "\n"
        }
    }else{
        mensaje = "Debes introducir un número positivo"
    }
    return mensaje
}

function trianguloInvIzq(num){
    let mensaje = "" // local
    if(num == parseInt(num) && Number(num) > 0){
        for(let i = 0; i<=num; i++){
            /**
             * i = 0 -> "5 4 3 2 1 \n"
             * i = 1 -> "5 4 3 2 \n"
             * i = 2 -> "5 4 3 \n"
             * i = 3 -> "5 4 \n"
             * i = 4 -> "5 \n"
             * i = 5 -> "\n"
             * etc
             */  
            
            // for(let j = num; j>i; j--){
            //     mensaje += "*"
            // }
            mensaje += "*".repeat(num-i)
            mensaje += "\n"
        }
    }else{
        mensaje = "Debes introducir un número positivo"
    }
    return mensaje
}

function trianguloInvDer(num){
    let mensaje = "" // local
    let espacios = 0
    if(num == parseInt(num) && Number(num) > 0){
        for(let i = 0; i<=num; i++){
            espacios = i

            // for(let k = 0; k < espacios; k++){
            //     mensaje += " "
            // }
            mensaje += " ".repeat(i)

            // for(let j = 0; j<num-i; j++){
            //     mensaje += "*"
            // }
            mensaje += "*".repeat(num-i)

            mensaje += "\n"
        }
    }else{
        mensaje = "Debes introducir un número positivo"
    }
    return mensaje
}