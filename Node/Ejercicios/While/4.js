/**
 * 
 * Determinar si el número que teclea el usuario es primo o no. Recordar que un número primo es el que solo puede dividirse por si mismo y por la unidad.
 * 
 * 7
 *  
 * 6
 * 5
 * 4
 * 3
 * 2
 * 1 
 * 7 es primo -> 7/7 y 7/1
 * 
 * 8
 * 7
 * 6
 * 5
 * 4 -> 2 -> 8 no es primo
 */

let num = parseInt(Number(prompt("Introduce un número entero:")))
let tieneDivisor = false
let i = num - 1 // optimización: parseInt(num / 2)

if(!isNaN(num) && num >= 0){
    while( !tieneDivisor && i > 1 ){
        tieneDivisor = num % i ? false : true
        i--;
    }
    if(tieneDivisor){
        alert(`${num} no es primo`)
    }else{
        alert(`${num} es primo`)
    }
} else {
    alert("Debes ingresar un número válido")
}

