/**
 * 
 * Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario. 
 * 
 * El resultado será de la forma "Los números enteros de 0 a n  suman suma"
 * 
 * Si tecleo el 5 obtendré "Los enteros enteros de 0 a n suman 15" (1+2+3+4+5 ).
 * 
 * n = 2 => 0 + 1 + 2 = 3
 * n = 100 => 0 + 1 + .... + 99 + 100 = 5050
 * 
 */

let num = parseInt(prompt("Introduce un entero:"))
let suma = 0
for(let i = 0; i <= num; i++){
    suma += i 
}
alert(suma)

// No hemos validado que nos pasen número positivo ni que sucede si es NaN => en estos casos obtenemos 0
// En el caso de infinity si hace pasos del bucle <- revisar