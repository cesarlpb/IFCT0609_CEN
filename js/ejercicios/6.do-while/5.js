/*

Usar un bucle do..while para crear una cadena que contenga letras repetidas. Las letras se entran por teclado y solo podrán ser la X o la Z despues de elegir las letras se le ingresa el número de repeticiones que deberá estar entre 1 y 15.

- Si elijo X y luego tecleo 10 se mostrará XXXXXXXXXX. 
- Si tecleo z me volverá a pedir letra, y si tecleo 20 me volverá a pedir el número

*/

let texto = "", char = "", mensaje = ""
let num = 0
// Este array cuando necesitemos más opciones:
// let listaChars = ["X", "B", "A"]
do {
    texto = prompt("Introduce un caracter:")
    if(texto.length > 0){
        char = texto[0] // primer caracter
    }
    num = parseInt(prompt("Introduce un número:")) // num o NaN
    
    if( char == 'X' ){
        mensaje = char.repeat(num)
    }
    // 1. no esté en lista
    // 2. necesitas true -> para seguir en bucle
    // 3. la cond mas simple es la de includes que te da true
    // 4. listaChars.includes(char) -> true si está
    // 5. negamos lo anterior: !listaChars.includes(char)
} while( char = 'X' || !(num > 0) )

alert(mensaje)