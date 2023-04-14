let edad = prompt("Dime tu edad:") // string
edad = parseInt(edad) // int
let mensaje = "No eres mayor de edad en España"

if (edad >= 18){
    mensaje = "Eres mayor de edad en España"
}

if (edad >= 21){
    mensaje2 = "Eres mayor de edad en USA :)"
} else {
    mensaje2 = "No eres mayor de edad en USA :(" 
}

if (edad >= 16 && edad < 18){
    mensaje3 = "Ya puedes conducir en USA"
} else if (edad >= 18) {
    mensaje3 = "Ya puedes conducir también en España"
} else {
    mensaje3 = "Aún no puedes conducir un coche."
}

if (edad < 10) {
    mensaje4 = "Aún no tienes 10 años!"
} else if (edad >= 10 && edad < 20) {
    mensaje4 = "Aún no tienes 20 años!"
} else if (edad >= 20 && edad < 30){
    mensaje4 = "Aún no tienes 30 años!"
} else {
    mensaje4 = "Tienes 30 o más!"
}

document.getElementById("resultado").innerText = mensaje
document.getElementById("resultado2").innerText = mensaje2
document.getElementById("resultado3").innerText = mensaje3
document.getElementById("resultado4").innerText = mensaje4