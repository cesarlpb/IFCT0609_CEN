/**
 * 
 * Realiza un script que le pida al usuario que telee la letra A (en mayúscula) y mientras no lo haga se lo vuelva a pedir. Usa un bulce do..while y la ventana alert para los mensajes
 * 
 * El usuario teclea b, el programa vuelve a pedirme que teclee una letra
 * 
 * Cuando recibimos "A" termina el programa
 * 
 */

let texto, char // texto y char son undefined

do {
    texto = prompt("Introduce un caracter:")
    if(texto.length > 0){
        char = texto[0]
    }
} while ( char != "A" )

alert("Fin del programa")