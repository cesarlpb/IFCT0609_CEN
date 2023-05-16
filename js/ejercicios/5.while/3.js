/**
 * 
 * Un script que preguntará al usuario si desea continuar con el programa. Si el usuario pulsa una letra n (mayúscla o minúscula), el programa finalizará. Cualquier otra entrada repetirá la pregunta
 * 
 * El usuario teclea Si, como no es la letra s pues dirá Error, ¿Desa seguir con el programa?
 * 
 * Solo n o N para el programa
 */

let char = ""

while( char.toLowerCase() != 'n' ){
    let texto = prompt("¿Quieres continuar el programa?\n(n o N para terminar)")
    if(texto.length > 0){
        char = texto[0]
    }
}

alert("Se ha finalizado el programa")