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

document.getElementById("resultado").innerText = mensaje
document.getElementById("resultado2").innerText = mensaje2