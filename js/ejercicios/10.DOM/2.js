/*
Tienes la página web modelo que debe cambiar el color del titular del negro actual a rojo y además debe quedar centrado. El único cambio será en el bloque cambiar y el código de función cambiar()
*/
function cambiar(){
    // Ej 1
    let h1 = document.getElementById("titular");
    h1.innerHTML = "Hola Mundo con Javascript";
    // Ej 2
    h1.style.color = "red"; // color rojo
    h1.style.fontFamily = "Arial, sans-serif";
    h1.style.fontSize = "32px";
    h1.style.fontWeight = "normal";
    h1.style.textDecoration = "underline";
    h1.style.textAlign = "center"; // centrado del h1
}