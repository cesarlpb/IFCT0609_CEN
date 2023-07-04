/**
 * 
 * Se trata de pedir al usuario que teclee un número entre 1 y 5, si escribe alguno que esté fuera de ese rango deberá volver a pedir el número
 * 
 * Si tecleo 0 me dirá Por favor teclee un número entre 1 y 5.
 * 
 */

let num = 0
while( num < 1 || num > 5 ){
    num = parseInt(Number(prompt("Introduce un número entre 1 y 5:")))

    if(isNaN(num)){
        num = 0
    }
}
alert("Has ingresado: " + num)

