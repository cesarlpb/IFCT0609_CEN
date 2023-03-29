let form = document.getElementById("form1");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function ej2(){
    let numero1 = document.getElementById("numero1").valueAsNumber
    let numero2 = document.getElementById("numero2").valueAsNumber
    let resultado = numero1 * numero2
    document.getElementById("producto").innerText = "Producto: " + resultado
}