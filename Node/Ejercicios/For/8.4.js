/**
 * 
 * Dibuja los triángulos, el cuadrado o el rectángulo pero deja elegir el caracter:

num1 -> 3 
char -> 'a'

a a
a a

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