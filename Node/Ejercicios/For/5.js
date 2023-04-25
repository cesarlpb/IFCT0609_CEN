/**
 * 
 * En este ejercicio mezclamos bucles on condicionales: el usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 den como resto 2.
Recuerda: un número es múltiplo de N es cuando el dividirlo por N el resto es 0.
    Por ejemplo si tecleas el 14, obtendré la lista 2, 5, 8 y 11
    0 % 3
    1 % 3
    2 % 3
 */

    let num = parseInt(prompt("Introduce un número:"))
    let mensaje = ""
    
    if(num > 1){
        // Porque 0 % num = 0 siempre y 1 % num = 1 siempre
        for(let i = 2; i<num; i++){
            if(i % 3 == 2){
                mensaje += i + ", "
            }
        }
        /*
        Métodos con strings:
        slice() -> corta string entre indices // https://www.w3schools.com/jsref/jsref_slice_string.asp
        trim() -> borra espacios delante y detrás del str // https://www.w3schools.com/jsref/jsref_trim_string.asp
        replace() -> reemplazar chars por otros chars // https://www.w3schools.com/jsref/jsref_replace.asp
        */ 
        mensaje = mensaje.slice(0,-2) // le quitamos la coma final y el espacio -> -2 caracteres del final
    }else{
        // negativo o NaN
        mensaje = "El dato introducido no es correcto.\nDebe ser un número positivo."
    }
    alert(mensaje)