/**
 * 
 * Dibuja los triángulos, el cuadrado o el rectángulo pero deja elegir el caracter:

num1 -> 3 
char -> 'a'

a a
a a

 */

// Modificamos el siguiente código:
let lado = parseInt(prompt("Introduce un número entero:"))
let texto = prompt("Introduce el caracter para dibujar")
let char = texto[0] // nos aseguramos de tomar un solo caracter
let mensaje = cuadrado(lado, char)
console.log(mensaje)

function cuadrado(lado, char){
  let mensaje = "" // local
  if(lado > 0 && texto.length > 0){
    for(let i = 0; i < lado; i++){
         
        mensaje += `${char} `.repeat(lado)
        mensaje += "\n"
    }
}else{
    mensaje = "Debes introducir un número positivo y al menos un caracter"
}
return mensaje
}
