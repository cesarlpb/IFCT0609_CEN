/**
 * Este script el usuario deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.
 * 
 * a 5 => aaaaa
 * 
 * Si el usuario teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x
 * 
 */

let texto = prompt("Introduce un caracter") // string
let char = "", mensaje = "Resultado:\n"
let num = parseInt(prompt("Introduce un número entero:")) // int o NaN
let esNumero = !isNaN(num) ? true : false // true si es número

if(texto.length > 0 && esNumero && num > 0){
    char = texto[0] // primer caracter del texto
    for(let i = 0; i < num; i++){
        mensaje += char
    }
}else{
    mensaje = "Debes introducir al menos un caracter y un número positivo válido"
}
alert(mensaje)
