/**
 * 
 * El usuario debe introducir dos valores numéricos por teclado y la aplicación deberá indicar cual es el mayor, el primero o el segundo.
 *
 * Opcional: La idea es usar las sentencias if reducidas (cond ? true : false)
 * 
 * Si el usuario entra 2 y luego 4, debe decir que el mayor es el segundo número.
 */

// Importaciones - no hay

// Declaraciones de variables globales
let numero1 = Number(prompt("Introduce el primer número:"))
let numero2 = Number(prompt("Introduce el segundo número:"))
let mensaje = "" 

// Piden mayor estricto, o sea que el caso del igual se podría ignorar

if (isNaN(numero1) || isNaN(numero2)){
    // if con condición que valida si alguno de los números no es correcto
    mensaje = "Los números son incorrectos"
}
else if(numero1 > numero2){
    mensaje = `${numero1} es mayor que ${numero2}`
} else if( numero2 > numero1){
    mensaje = `${numero2} es mayor que ${numero1}`
} else if (numero1 == numero2) {
    mensaje = "Los números son iguales"
}

console.log(mensaje)
