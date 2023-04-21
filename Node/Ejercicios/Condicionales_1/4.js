//Este script pide al usuario que teclee una letra entre A, B, C, D. Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó..

//Es como un juego, si marcas la A te dará true y si marcas cualuier otra, saldrá error

let respuesta = prompt("Indica una de las opciones \nA \nB \nC \nD");
let mensaje = ""
if (respuesta.toUpperCase() == 'A'){
    mensaje = "Has acertado!";
 } else{
    mensaje = "Opción incorrecta";
}
alert(mensaje)