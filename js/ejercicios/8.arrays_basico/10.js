/**
 * 
 * Un tienda vende monitores, teclados y ratones. Los precios se almacenan en una estructura array conde cada elemento es un par producto - precio.

Diseña una función que reciba como argumento el nombre de un producto (minúscula) y devuelva su precio.

Si la lista de precios es 

monitor: 200€, 
teclado: 20€ 
ratón: 10€, 

Al pedir precio('monitor') me devolverá 200.
 */

function precio(producto){
    let tablaPrecios = [
        ["monitor", 200],
        ["teclado", 20],
        ["ratón", 10],
        ["raton", 10]
    ]
    for(let i = 0; i<tablaPrecios.length; i++){
        if(producto.toLowerCase() == tablaPrecios[i][0]){
            return tablaPrecios[i][1]
        }
    }
    return "El producto no existe"   
}