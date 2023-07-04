// 2. Recibimos dos números por prompt y vamos a hacer una operación (+, -, etc.) y verificamos que nos han dado números.

let numero1 = Number(prompt("Introduce primer número:"))
let numero2 = Number(prompt("Introduce segundo número:"))
let resultado = ""

if (isNaN(numero1) && isNaN(numero2)) {
    resultado = "Ambos números no son válidos"
}
else if (isNaN(numero1)){
    resultado = "El primer número no es válido"
} else if (isNaN(numero2)){
    resultado = "El segundo número no es válido"
}
else {
    resultado = numero1 + numero2
}

document.getElementById("resultado6").innerText = resultado