/*
Necesitas una página web con dos bloques div. El primer bloque contiene el texto "Pasa por aqui" y el segundo "Efectos del movimiento" con un argumento id = "efecto" . Cuando el ratón pase por el primer bloque se llamará a la función color que cambia el fondo del segundo bloque a color verde (backgroundColor green")
*/
function color(color_){
    let divEfecto = document.getElementById("efecto");
    divEfecto.style.backgroundColor = color_; 
    // onmouseover = llama a la función una vez cuando el cursor entra en el div -> pone el color a verde
    // onmouseout = llama a la función una vez cuando el cursor sale del div -> pone el color a marrón 
}