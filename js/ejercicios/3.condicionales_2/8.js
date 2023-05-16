/**
 * 
 * En una tienda coches se quiere redirigir a un cliente a una sección de acuerdo al tipo de coche que elija. 
 * 
 * 1. Si elige tipo gasolina o 1 se le enviará a la oficina numero 100. 
 * 2. Si elige el tipo diesel o 2 irá a la oficia 200 y 
 * 3. si elige electrico o 3 se le enviará a la ofician 300.
 * 
 * inputs: string o int
 * "gasolina" o "1"
 * "diesel" o "2"
 * "electrico" o "3"
 * 
 */

let opcion = prompt("Elige el tipo de coche que quieres:") 
let mensaje = "La entrada de datos no es correcta"
let opcionesValidas = ["gasolina", "diesel", "electrico", "hibrido"]
                    //  0 => 1      1 => 2      2 => 3      
                    //  es decir: numOpcion = indice + 1 
                    // o indice = numOpcion - 1
let oficinas = ["100", "200", "300", "400"]
let oficina = ""
let numOpciones = opcionesValidas.length // 3

// No elige una opción válida o elige un número fuera del rango: 1, 2, 3
opcion = opcion.toLowerCase()
opcion = opcion.replace("é", "e") // cambia un caracter por otro
opcion = opcion.replace("í", "i") // cambia un caracter por otro

let numOpcion = 0 // 0 -> false
let indice = opcionesValidas.indexOf(opcion) // 0, 1, 2 => texto correcto
                                             // -1 => número

if(indice == -1){
    // el usuario ha elegido un número como input
    numOpcion = parseInt(opcion) // no debería fallar la conversión 
                                 // 1, 2, 3
}

// texto
// Elige "gasolina" o 1, etc.
if ( indice >= 0 && indice < numOpciones ){
    // Quiere decir que me han pasado un texto válido
    oficina = oficinas[indice] // 100, 200, 300
    mensaje = `Debes ir a la oficina ${oficina}`
}
// número
// Elige 1, 2, 3...
if (numOpcion){
    if( numOpcion > 0 && numOpcion <= numOpciones ){
        indice = numOpcion - 1
        oficina = oficinas[indice] // 100, 200, 300
        mensaje = `Debes ir a la oficina ${oficina}`
    } else {
        mensaje = `El número no está en el rango correcto.
Debe ser un entero entre 1 y ${numOpciones}`
    }
}
alert(mensaje)

