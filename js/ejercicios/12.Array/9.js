/*
En este ejercicio partimos de dos arrays: artículos que contiene nombres de artículos y precios que contiene lo precios correspondientes de cada artículo. Se trata de crear una función precio(art) precio que lleva como argumento el nombre de un artículo y devuelve el precio correspondiente. si el artículo no existe devolverá -1.

Una lista podría ser Naranjas, Peras, Bananas y la de precios sería 10, 12, 15. La llamada precios('Peras') deberá devolver 12 para el precio de las peras.
*/

let articulos = ['naranjas', 'peras', 'bananas']
let precios = [10, 12, 15]

function precio(articulo){
    let indice = articulos.indexOf(articulo.toLowerCase()) // devuelve el índice del elemento en el array o -1 si no existe
    if(indice == -1){
        // El producto no existe en la lista
        return -1
    }else{
        return precios[indice]
    }
}
