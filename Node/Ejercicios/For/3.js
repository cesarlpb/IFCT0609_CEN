/**
 * 
 * Se quiere un bucle que genere una lista con todos los números pares positivos por debajo del número tecleado por el usuario. Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n').
 * 
 * Si tecleo el número el número 9 deberá mostrar cinco lineas con los números 0 2 4 6 8
 * 
 * 10 -> 0..8 // estrictamente menores
 * 11 -> 0..10
 */

let num = parseInt(prompt("Introduce el número:"))
let mensaje = ""

if(num > 0){
    for(let i = 0; i<num; i=i+2){
        mensaje += i + "\n"
    }
}else{
    mensaje = "El dato introducido no es correcto.\nDebe ser un número positivo."
}
alert(mensaje)