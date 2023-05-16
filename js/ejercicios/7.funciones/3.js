/**
 * 
 * Función que calcule si un número es múltiplo de otro. La función recibirá dos argumentos, el primero será el supuesto mutiplo del segundo argumento.
 * 
 * Si ejecuto o llamo a la función con esMultiplo(40,4) debe devolver true porque 40 es divisible por 4.
 * 
 * esMultiplo(11, 2) -> false
 * esMultiplo(17, 2) -> false
 * esMultiplo(10, 2) -> true
 * etc
 */

let multiplo = parseInt(prompt("Introduce el potencial múltiplo:"))
let divisor = parseInt(prompt("Introduce el divisor:")) // no puede ser 0

// Descartamos NaN
if(!isNaN(multiplo) && !isNaN(divisor) && divisor != 0){
    alert(esMultiplo(multiplo, divisor))
}else{
    // Se podría separar en los casos para especificar el mensaje:
    alert("Los números no son válidos o el divisor es cero.")
}

function esMultiplo(multiplo, divisor){
    return multiplo % divisor === 0
}