/*
En esta página tienes dos bloques div a modo de botones, como ves en este código HTML de abajo. Debes escribir una única función Javascript (llamada pulsar) para manejar los eventos click de ambos botones. Cuando pulses con el ratón en cualquier botón deberá aparecer una ventana alert indicando el id del botón donde se ha pulsado.
*/

function pulsar(div_){
    let id = div_.getAttribute("id");
    let texto = div_.innerText;
    alert("Hiciste click en " + id + " con texto:\n\n" + texto);
}