/**
 * Cuadrado:
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
 */

 
let num = prompt("Introduce un número entero:")
let mensaje = cuadrado(num) // global
console.log(mensaje) // con alert() parece más un rectángulo pero el resultado es correcto

function cuadrado(num){
    let mensaje = "" // local
    if(num == parseInt(num) && Number(num) > 0){
        for(let i = 0; i<num; i++){
            mensaje += "* ".repeat(num)
            mensaje += "\n"
        }
    }else{
        mensaje = "Debes introducir un número positivo"
    }
    return mensaje
}