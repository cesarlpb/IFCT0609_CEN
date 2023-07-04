/*
El script que tienes que crear en la página modelo debe cambiar la clase del elemento que contiene al encabezado de la página. Al pulsar sobre el titular se añadirá o se eliminarás (toggle) la clase de nombre activo
*/
function toggleClase(){
    // Ej 7
    let h1 = document.getElementById("titular");
    tieneClaseActivo = h1.classList.value.includes("activo"); // comprobamos si la clase "activo" existe en el elemento <h1>
    if(!tieneClaseActivo){
        h1.classList.add("activo");
        console.log("activo");
    }else{
        h1.classList.remove("activo");
        console.log("no activo");
    }
    /* Todo: extender esto a una lista de "estados" de 2 o más, por ejemplo: "inactivo", "activo", "desactivado", "activado", etc. 
    let estados = ["activo", "inactivo", "desactivado"]
    -> Haciendo click se debe alternar entre los estados de la lista (arr)
    */
}
