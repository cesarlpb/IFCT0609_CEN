// Documentación del API: https://api.escuelajs.co/docs
// Products

// GET lista
/*
Fn para pedir la lista de productos en el endpoint
Params:
limit := cantidad de objetos que me devuelve
offset := el desplazamiento en id, si es 0 empieza en el 1 
*/
function getProductos(limit, offset){
    if( limit < 1 ){
        limit = 1
    } else if ( limit > 200 ){
        limit = 200
    }
    if ( offset < 0 ) {
        offset = 0
    } else if ( offset > 199 ){
        offset = 0
    }
    fetch('https://api.escuelajs.co/api/v1/products?limit='+limit+'&offset='+offset)
    .then(response => response.json())
    .then(json => console.log(json))
}
// GET un producto
// id

// POST crear producto

// PUT editar producto

// DELETE borrar producto