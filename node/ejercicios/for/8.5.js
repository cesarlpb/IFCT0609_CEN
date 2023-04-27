/**
 * Dibuja el cuadrado o el rectángulo con borde:
 * Permite elegir dos caracteres

lado -> por ej: 5 

No hemos permitido elegir chars:
char1 -> 'a'
char2 -> 'x'

Pseudocódigo para poner borde a un cuadrado

  - Escribir la primera fila (i=0) con el caracter de borde
  - Escribimos 1 caracter de borde + caracteres de "relleno" + 1 caracter de borde
    - Necesito lado - 2 = caracteres de relleno 
    - Debo validar que el lado sea al menos 3 para que lo de poner "relleno" y borde tenga sentido
  - Escribir la última fila (i=4) con el caracter de borde

lado = 5

x x x x x
x a a a x
x a a a x
x a a a x
x x x x x

lado = 3

x x x
x a x
x x x

Casos excluidos:

x x
x x

x

*/

 
let lado = parseInt(prompt("Introduce un número entero:"))
let mensaje = cuadradoConBorde(lado)
console.log(mensaje)

function cuadradoConBorde(lado){
    let mensaje = ""
    if(lado > 0 && lado >=3){
        for(let i = 0; i < lado; i++){
            if (i == 0 || i == lado - 1 ){
                mensaje += "x ".repeat(lado)
            }else{
                mensaje += "x " + "* ".repeat(lado-2) + "x " 
            }
            mensaje += "\n"
        }
    }else{
        mensaje = "Debes introducir un número positivo que sea al menos 3"
    }
    return mensaje
}
