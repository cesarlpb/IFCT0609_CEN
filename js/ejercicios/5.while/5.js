/**
 * 
 * Escribir un script que pida al usuario una contraseña. Si coincide le devolverá el mensaje "Acceso concedido" y si no coincide le deolverá el mensaje "Acceso Denegado" . 
 * 
 * Solo falla tres veces se emitirá el mensaje "Alerta, intruso"
La contrasñe es por ejemplo pasar. Tecleo tres veces otra distinta: Acceso Intruso.

 */

let password1 = "a"
let password2 = "b"
let intentos = 0
let esCorrecto = false

password1 = prompt("Introduce la contraseña:")

while( !esCorrecto && intentos < 3 ){
    password2 = prompt("Repite la contraseña:")
    esCorrecto = password1 === password2 ? true : false
    intentos++;
}

if(esCorrecto){
    alert("Acceso concedido")
} else {
    alert("Acceso denegado")
}