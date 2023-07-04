/**
 * 
 * Este ejemplo debe pedir al usuario un  número entero y, mediante sucesivas divisiones por 10 debe escribir los digitos que lo forman de menor a mayor orden (de unidades hacia arriba) en una cadena separados por un espacio
 * 
 * Si escribo 126 deberá responder: 
 * "Dígitos del número: 1 2 6" o 1 centena, 2 decenas y 6 unidades
 * 
 * Descomposición decimal del número
 */

let num = parseInt(prompt("Introduce un número para descomponerlo:"))
let mensaje = ""
if(!isNaN(num) && num >= 0){
    // 126 / 100 = 1.26 -> 1 centena
    // 126 - 1*100 = 126 - 100 = 26
    // 26 ...

    // Centenas
    let centenas = parseInt(num / 100) // 0 si es menor que 100, 1, 2...
    let resto = num % 100
    
    mensaje += `${centenas} ${centenas > 1 || centenas == 0 ? "centenas" : "centena"}`
    
    // Decenas
    let decenas = parseInt(resto / 10) // 0 si es menor que 10, 1, 2...
    resto = resto % 10
    
    mensaje += `, ${decenas} ${decenas > 1 || decenas == 0 ? "decenas" : "decena"}`
    
    // Unidades
    let unidades = resto
    
    mensaje += ` y ${unidades} ${unidades > 1 || unidades == 0 ? "unidades" : "unidad"}`
    

} else {
    alert("Debes introducir un número válido")
}

alert(mensaje)