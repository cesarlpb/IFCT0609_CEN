/**
 * Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, cerveza, refresco, agua. Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.
 * 
 *  vino, cerveza, refresco, agua
 * 
 *  cerveza o vino => barra
 * 
 *  refresco, agua => tienda
 */

let bebida = prompt(`Elige la bebida que quieres:
    vino
    cerveza
    refresco
    agua`)

if( bebida == "vino" || bebida == "cerveza" ){
    alert("Debes ir a la barra")
} else if ( bebida == "refresco" || bebida == "agua" ) {
    alert("Debes ir a la tienda")
} else {
    alert("La opción elegida no es válida")
}