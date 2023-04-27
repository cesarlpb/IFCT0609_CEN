/**
 * 
 * Dibuja el cuadrado o el rectángulo con borde:
 * Permite elegir dos caracteres

num1 -> 5 
char1 -> 'a'
char2 -> 'x'

x x x x x
x a a a x
x a a a x
x a a a x
x x x x x

x x x
x a x
x x x

x x
x x

x

 */

 
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