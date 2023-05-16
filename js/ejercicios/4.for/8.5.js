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
let textoBorde = prompt("Introduce el caracter para el borde")
let textoRelleno = prompt("Introduce el caracter para el relleno:")
let mensaje = cuadradoConBorde(lado, textoBorde, textoRelleno)
console.log(mensaje)

function cuadradoConBorde(lado, textoBorde, textoRelleno){
    let mensaje = ""
    let charBorde = textoBorde.length > 0 
        ? `${textoBorde[0]} ` 
        : "x "
    let charRelleno = textoRelleno.length > 0 
        ? `${textoRelleno[0]} ` 
        : "* "

    if(lado > 0 && lado >=3){
        for(let i = 0; i < lado; i++){
            if (i == 0 || i == lado - 1 ){
                mensaje += charBorde.repeat(lado)
            }else{
                mensaje += charBorde + charRelleno.repeat(lado-2) + charBorde 
            }
            mensaje += "\n"
        }
    }else{
        mensaje = "Debes introducir un número positivo que sea al menos 3"
    }
    return mensaje
}
