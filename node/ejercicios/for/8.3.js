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
let base = Number(prompt("Introduce la base del rectángulo:"))      // unidades: cm, m, etc.
let altura = Number(prompt("Introduce la altura del rectángulo:"))  // unidades: cm, m, etc.
let mensaje = rectangulo(base, altura)
console.log(mensaje)

function rectangulo(base, altura){
    let mensaje = ""
    if(base > 0 && altura > 0){
        for(let i = 0; i < altura; i++){
            mensaje += "*".repeat(base)
            mensaje += "\n"
        }
    }else{
        mensaje = "Debes introducir dos números positivos"
    }
    return mensaje
}
