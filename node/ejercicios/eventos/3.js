/**
 * En esta págian web debes agregar un script para asignar un manejador de eventos al botón button. Este script deberá escribir en el campo total el valor de multiplicar los toros dos campos.
 */

let submit = document.getElementById("enviar");  // input type=button del form
submit.addEventListener("click", calcularTotal); // añadimos listener -> "escucha" los eventos de tipo click en este elemento
function calcularTotal(){
    let precio = document.getElementById("precio").valueAsNumber;       // número del input con id precio -> euros
    let cantidad = document.getElementById("cantidad").valueAsNumber;   // número del input con id cantidad -> sin unidades
    let resultado = document.getElementById("total") // elemento donde vamos a colocar el resultado
    if(precio * cantidad > 0){
        resultado.value = (precio * cantidad).toFixed(2) + " €";
    }else{
        resultado.value = (precio * 0).toFixed(2) + " €";
    }
}