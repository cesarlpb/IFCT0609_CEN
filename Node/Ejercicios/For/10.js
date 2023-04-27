/**
 * 
 * Programa un script que pida al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular la media aritmética. O sea la suma de los 4 números dividida entre 4
 * 
 * El progrma pide 4 veces al usuario que telcee un número y este escribe 5,9,10,12. El programa dirá "La media es 9"
 */

let suma = 0
for(let i = 0; i < 4; i++){
    let num = Number(prompt("Introduce número:"))
    suma += num
}
let media = suma / 4
alert(media.toFixed(2))

// No hemos validado que nos pasen NaN o Infinity ni negativos :)