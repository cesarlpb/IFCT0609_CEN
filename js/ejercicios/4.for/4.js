/**
 * 
 * Este script debe escribir la tabla de multiplicar del número que el usuario teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.

 Recuerda que el salto de linea es el carácter "\n"
 * 

 input => int

 Si el usuario teclea el 4 la tabla mostrará diez líneas en la forma:

    4 x 1 = 4
    4 x 2 = 8
    ...
    4 x 10 = 40
 */

let num = Number(prompt("Introduce un número entero:")) // float, entero o NaN
let numEntero = parseInt(num) // entero o NaN
let mensaje = ""
let tabla = ""

if(num == numEntero && num > 0){
    // es un entero => hacemos la tabla
    mensaje = "La tabla de multiplicar es:\n"
    for(let i = 1; i<=10; i++){
        // versión con más tabuladores
        // tabla += `${numEntero}\tx\t${i}\t=\t${numEntero * i}\n`
        // versión con un tabulador:
        tabla += `${numEntero} x ${i}\t= ${numEntero * i}\n`
    }
    mensaje += tabla
}else{
    // 1.5 o NaN
    mensaje = "El dato introducido no es correcto.\nDebe ser un número positivo."
}
// El caracter \t de tabulador no se presenta bien en alert()
console.log(mensaje)