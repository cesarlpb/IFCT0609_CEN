/*
Tienes que crear un script que gestione una lista de la compra. Para ello tienes dos listas de artículos: compra, pendiente. Cada elemento de la lista compra es un objeto con dos propiedades: nombre del artículo y estado. Estado es un booleano true si el artículo se compró, false en caso contrario. Pendiente es una lista con los nombres de los artículos que faltan por comprar. La función que debes crear recibe como argumento la lista de compra y devuelve la lista de pendientes.

Por ejemplo tienes la lista compra con Naranjas: false, Manzanas:true, Peras:false, Plátanos: true. La lista pendientes contendrá Naranjas y Peras.
*/

class Articulo {
    constructor(nombre, estado){
        this.nombre = nombre
        this.estado = estado
    }
}
let listaCompra = [
    new Articulo('Naranjas', false),
    new Articulo('Manzanas', true),
    new Articulo('Peras', false),
]

function pendientes(listaCompra){
    let listaPendientes = []
    for(let i = 0; i < listaCompra.length; i++){
        let estadoArticulo = listaCompra[i].estado // true o false, true si esta comprado y false en caso contrario
        if(!estadoArticulo){
            listaPendientes.push(listaCompra[i].nombre)
        }
    }
    return listaPendientes.sort()
}