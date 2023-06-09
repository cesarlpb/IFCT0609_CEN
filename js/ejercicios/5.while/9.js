/**
 * 
 * Este script muestra un menu de opciones: 1- Leer datos. 2- Mostrar datos 3- Fin. 
 * El usuario deberá teclear uno de ellos y el programa mostrará la opción elegida. 
 * Si teclea un valor fuera del menus se mostrará un mensaje de error y se vuelve a pedir un número de opción. 
 * El programa finaliza al teclear el 3.
 * 
 * 1- Leer datos. 
 * 2- Mostrar datos 
 * 3- Fin
 * 
 * 1 -> "Leiste los datos"
 * 2 -> "Mostramos datos"
 * 3 -> Acaba el programa
 * Cualquier otro caracter -> mensaje de error y seguimos pidiendo opciones
 * 
 */

let opciones = [1, 2, 3]
let mensaje = ""
let mensajes = ["Leiste los datos", "Mostramos los datos", "Fin del programa"]
let miPrompt = `
    1 - Leer datos
    2 - Mostrar datos 
    3 - Fin
    `
let opcionElegida = ""

/*
// condición para pedir opción hasta que sea una del array opciones: 
while(!opciones.includes(opcionElegida)){ ... }

// Alternativa: opciones.indexOf(opcionElegida) == -1) 
*/

// condición para seguir en bucle hasta que nos elijan un 3:
while(opcionElegida != 3){
    opcionElegida = parseInt(prompt("Introduce la opción:" + miPrompt))
    if(opciones.includes(opcionElegida)){
        let indice = opciones.indexOf(opcionElegida) // no puede ser -1
        mensaje = mensajes[indice] // indice = 0, 1, 2
    }else{
        mensaje = "Elige una opción correcta"
    }
    alert(mensaje) // comentar si usamos otra condición -> líneas 31 o 33
}
// Si queremos seguir en bucle hasta que elijan 3 este alert no hace falta, en otro caso sí deberíamos descomentar este alert:
// alert(mensaje)



