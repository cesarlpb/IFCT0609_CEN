/**
 * Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7.
 * 
 * Pedimos tres notas
 * Calculamos la media
 * 
 * if media < 5 => suspenso
 * if media entre 5 y 7 => aprobado
 * if media > 7 notable
 * if media > 9 sobresaliente
 */

let nota1 = Number(prompt("Introduce la primera nota:"))
let nota2 = Number(prompt("Introduce la segunda nota:"))
let nota3 = Number(prompt("Introduce la tercera nota:"))

let media = (nota1 + nota2 + nota3) / 3
let mensaje = ""

if( media < 5 ){
    mensaje = "suspenso"
} else if ( media > 5 && media < 7 ) {
    mensaje = "aprobado"
} else if ( media > 7 && media < 9) {
    mensaje = "notable"
} else if ( media >= 9 ) {
    mensaje = "sobresaliente"
}

media = media.toFixed(1) // 7.33... => '7.3' string
alert(`Tu nota es: ${media} (${mensaje})`)
