let form2 = document.getElementById("form2");
function handleForm(event) { event.preventDefault(); } 
form2.addEventListener('submit', handleForm);

function suma(){
    let numero3 = document.getElementById("numero3").valueAsNumber
    let numero4 = document.getElementById("numero4").valueAsNumber
    let resultado = numero3 + numero4
    document.getElementById("resultado").innerText = "Suma: " + resultado.toLocaleString()
}
function resta(){
    let numero3 = document.getElementById("numero3").valueAsNumber
    let numero4 = document.getElementById("numero4").valueAsNumber
    let resultado = numero3 - numero4
    document.getElementById("resultado").innerText = "Resta: " + resultado.toLocaleString()
}
function prod(){
    let numero3 = document.getElementById("numero3").valueAsNumber
    let numero4 = document.getElementById("numero4").valueAsNumber
    let resultado = numero3 * numero4
    document.getElementById("resultado").innerText = "Producto: " + resultado.toLocaleString()
}
function divi(){
    let numero3 = document.getElementById("numero3").valueAsNumber
    let numero4 = document.getElementById("numero4").valueAsNumber
    let resultado = numero3 / numero4
    document.getElementById("resultado").innerText = "División: " + resultado.toLocaleString()
}