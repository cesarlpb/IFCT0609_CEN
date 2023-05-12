/*
En la página que puedes construir con este código HTML tienes tres bloques: uno de color rojo otro de color blanco y otro de color azul. 

* Crea un script para que cuando el ratón se mueve desde el bloque rojo al central éste se pongo rojo. -> el blanco pasa a rojo

* Si se mueve desde el azul al central, éste se pondrá azul. -> el blanco pasa a azul

* Si entra en el bloque desde otro sitio el bloque recuperará el color blanco. -> si movemos el ratón desde "fuera" de los otros divs, el div blanco recupera su color blanco
*/
let puntoDePartida = "" // "", "rojo", "azul" implicando "" que o bien se parte de fuera de rojo o azul o bien se parte de cualquier lugar de la página
function entraEnBlanco(el_){
    // console.log("entra en blanco")
    if(puntoDePartida == "azul"){
        el_.style.backgroundColor = "blue";
    }else if(puntoDePartida == "rojo"){
        el_.style.backgroundColor = "red";
    }else{
        el_.style.backgroundColor = "white";
    }
    // console.log(puntoDePartida);
}
function saleDeBlanco(){
    puntoDePartida = "";
    // console.log(puntoDePartida);
}
function saleDeRojo(el_){
    // console.log("sale de rojo");
    puntoDePartida = "rojo";
    // console.log(puntoDePartida);
}
function saleDeAzul(){
    // console.log("sale de azul")
    puntoDePartida = "azul";
    // console.log(puntoDePartida);
}