let form2 = document.getElementById("form2");
function handleForm(event) { event.preventDefault(); } 
form2.addEventListener('submit', handleForm);

function suma(){
    let numero3 = document.getElementById("numero3").valueAsNumber
    let numero4 = document.getElementById("numero4").valueAsNumber
    let resultado = numero3 + numero4
    document.getElementById("resultado").innerText = "Suma: " + resultado.toLocaleString()
    return resultado
}
function resta(){
    let numero3 = document.getElementById("numero3").valueAsNumber
    let numero4 = document.getElementById("numero4").valueAsNumber
    let resultado = numero3 - numero4
    document.getElementById("resultado").innerText = "Resta: " + resultado.toLocaleString()
    return resultado
}
function prod(){
    let numero3 = document.getElementById("numero3").valueAsNumber
    let numero4 = document.getElementById("numero4").valueAsNumber
    let resultado = numero3 * numero4
    document.getElementById("resultado").innerText = "Producto: " + resultado.toLocaleString()
    return resultado
}
function divi(){
    let numero3 = document.getElementById("numero3").valueAsNumber
    let numero4 = document.getElementById("numero4").valueAsNumber
    let resultado = numero3 / numero4
    document.getElementById("resultado").innerText = "División: " + resultado.toLocaleString()
    return resultado
}
function todo(){
    let resultado1 = suma()
    let resultado2 = resta()
    let resultado3 = prod()
    let resultado4 = divi()
    let resultado = ""
    resultado += "Suma: " + resultado1.toLocaleString()
    resultado += "\nResta: " + resultado2.toLocaleString()
    resultado += "\nProducto: " + resultado3.toLocaleString()
    resultado += "\nDivisión: " + resultado4.toLocaleString()
    document.getElementById("resultado").innerText = resultado
}