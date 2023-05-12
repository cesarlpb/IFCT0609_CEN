/*
Crea un script para que se active cuando la página se haya cargado completamente (evento load de window). Una vez cargada la página el script asignará un evento al bñpque de manera que al entrar el ratón su fondo pase a rojo y al salir vuelva al blanco.

El script se colocará en la sección head. de la página.
*/

// De este forma, esperamos a la carga de la página y cuando se recibe el evento "load" -> ejecutamos nuestro código

window.addEventListener("load", (event) => {
    // Información de carga de página y evento:
    // console.log("La página está cargada");
    // console.log(event.type, event.target) // tipo de evento: load, target del evento: document, etc.

    let cuadro = document.getElementById("cuadro"); // div
    cuadro.addEventListener("mouseover", (event) => cambiarFondo(cuadro, "red"));
    cuadro.addEventListener("mouseout", (event) => cambiarFondo(cuadro, "brown"));
});

function cambiarFondo(cuadro_, color_){
    // console.log("color:", color_);
    cuadro_.style.backgroundColor = color_;
}

