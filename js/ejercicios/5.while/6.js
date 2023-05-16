/*
En este script se pedirá al usuario que teclee un número cada vez. El proceso acaba cuando teclee un 0 en cuyo caso además mostrará la suma de todos los números tecleados.

El usuario teclea primero el 4 luego el 5 depsués 6 y finalmente , 0. El programa se para y muestra "La suma de todos los número es 15"

3 2 1 0 -> 5
*/

let num = -1
let suma = 0
let mensaje = "Suma: "
while( num != 0 ){
    num = parseInt(prompt("Introduce un número:"))
    if(!isNaN(num)){
        suma += num
    }else{
        // num = 0 // acaba el bucle
        // mensaje = "Se ha recibido un valor incorrecto. Suma:"
        suma += 0 // ignora el caracter incorrecto
    }
}
alert(mensaje + " " + suma)
